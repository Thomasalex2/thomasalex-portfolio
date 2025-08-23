import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const TechnicalNetwork = ({ 
  // Animation settings
  animationSpeed = 0.5,
  driftSpeed = 0.2,
  
  // Visual settings
  dotCount = 200,
  lineCount = 400,
  dotSize = 2,
  lineWidth = 1,
  dotColor = '#4B5563', // gray-600
  lineColor = '#D1D5DB', // gray-300
  
  // Network settings
  clusterCount = 8,
  clusterDensity = 0.4,
  connectionDistance = 120,
  
  // Opacity settings
  minOpacity = 0.3,
  maxOpacity = 0.8
}) => {
  const { isDark } = useTheme();
  
  // Only render on light theme
  if (isDark) {
    return null;
  }
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const dotsRef = useRef([]);
  const linesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create dots
    const createDots = () => {
      const dots = [];
      const clusters = [];
      
      // Create cluster centers
      for (let i = 0; i < clusterCount; i++) {
        clusters.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 100 + Math.random() * 150
        });
      }
      
      // Create dots within clusters
      for (let i = 0; i < dotCount; i++) {
        let x, y;
        const cluster = clusters[Math.floor(Math.random() * clusters.length)];
        
        if (Math.random() < clusterDensity) {
          // Place in cluster
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * cluster.radius;
          x = cluster.x + Math.cos(angle) * distance;
          y = cluster.y + Math.sin(angle) * distance;
        } else {
          // Place randomly
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
        }
        
        dots.push({
          x,
          y,
          vx: (Math.random() - 0.5) * driftSpeed,
          vy: (Math.random() - 0.5) * driftSpeed,
          opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
      
      return dots;
    };

    // Create lines between nearby dots to form polygons
    const createLines = () => {
      const lines = [];
      const connectionsPerDot = Math.floor(lineCount / dotCount);
      
      dotsRef.current.forEach((dot, index) => {
        // Find all dots within connection distance
        const nearbyDots = dotsRef.current
          .map((otherDot, otherIndex) => ({
            dot: otherDot,
            distance: Math.sqrt(
              Math.pow(otherDot.x - dot.x, 2) + Math.pow(otherDot.y - dot.y, 2)
            ),
            index: otherIndex
          }))
          .filter(item => item.index !== index && item.distance < connectionDistance)
          .sort((a, b) => a.distance - b.distance);
        
        // Connect to the closest dots to form polygons
        const connectionsToMake = Math.min(connectionsPerDot, nearbyDots.length);
        
        for (let i = 0; i < connectionsToMake; i++) {
          const targetDot = nearbyDots[i].dot;
          
          // Check if this connection already exists
          const connectionExists = lines.some(line => 
            (line.dot1 === dot && line.dot2 === targetDot) ||
            (line.dot1 === targetDot && line.dot2 === dot)
          );
          
          if (!connectionExists) {
            lines.push({
              dot1: dot,
              dot2: targetDot,
              opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
              fadePhase: Math.random() * Math.PI * 2
            });
          }
        }
      });
      
      return lines;
    };

    // Initialize
    dotsRef.current = createDots();
    linesRef.current = createLines();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      dotsRef.current.forEach(dot => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Wrap around screen
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;
        
        // Update pulse
        dot.pulsePhase += animationSpeed * 0.02;
        const pulseOpacity = dot.opacity + Math.sin(dot.pulsePhase) * 0.1;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = Math.max(0, Math.min(1, pulseOpacity));
        ctx.fill();
      });
      
      // Draw lines
      linesRef.current.forEach(line => {
        const distance = Math.sqrt(
          Math.pow(line.dot2.x - line.dot1.x, 2) + Math.pow(line.dot2.y - line.dot1.y, 2)
        );
        
        if (distance < connectionDistance) {
          // Update fade
          line.fadePhase += animationSpeed * 0.01;
          const fadeOpacity = line.opacity + Math.sin(line.fadePhase) * 0.1;
          
          // Draw line
          ctx.beginPath();
          ctx.moveTo(line.dot1.x, line.dot1.y);
          ctx.lineTo(line.dot2.x, line.dot2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = lineWidth;
          ctx.globalAlpha = Math.max(0, Math.min(1, fadeOpacity));
          ctx.stroke();
        }
      });
      
      // Reset global alpha
      ctx.globalAlpha = 1;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animationSpeed, driftSpeed, dotCount, lineCount, dotSize, lineWidth, dotColor, lineColor, clusterCount, clusterDensity, connectionDistance, minOpacity, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default TechnicalNetwork;
