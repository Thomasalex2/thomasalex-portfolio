import React from 'react'
import { motion } from 'framer-motion'

const shimmer = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"

export const ProjectSkeleton = () => (
  <div className="card overflow-hidden h-full flex flex-col">
    <div className="h-32 sm:h-40 bg-white/5 overflow-hidden">
      <div className={`w-full h-full ${shimmer}`} />
    </div>
    <div className="p-4 sm:p-5 flex-1 flex flex-col">
      <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
        <div className={`h-5 w-3/4 rounded ${shimmer}`} />
        <div className={`h-5 w-5 rounded ${shimmer}`} />
      </div>
      <div className={`h-4 w-full rounded mb-3 flex-1 ${shimmer}`} />
      <div className="flex flex-wrap gap-1 mb-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-6 w-16 rounded-full ${shimmer}`} />
        ))}
      </div>
      <div className="flex items-center justify-between mt-auto pt-2">
        <div className={`h-4 w-20 rounded ${shimmer}`} />
        <div className={`h-4 w-16 rounded-full ${shimmer}`} />
      </div>
    </div>
  </div>
)

export const SkillSkeleton = () => (
  <div className="card p-6">
    <div className={`h-6 w-32 rounded mb-4 ${shimmer}`} />
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-forest rounded-full flex-shrink-0" />
          <div className={`h-4 w-full rounded ${shimmer}`} />
        </div>
      ))}
    </div>
  </div>
)

export const AboutSkeleton = () => (
  <div className="grid md:grid-cols-3 gap-10 items-center">
    <div className="flex justify-center">
      <div className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full ${shimmer}`} />
    </div>
    <div className="md:col-span-2 space-y-4">
      <div className={`h-8 w-32 rounded ${shimmer}`} />
      <div className={`h-4 w-full rounded ${shimmer}`} />
      <div className={`h-4 w-5/6 rounded ${shimmer}`} />
      <div className={`h-4 w-4/6 rounded ${shimmer}`} />
    </div>
  </div>
)

export const ContactSkeleton = () => (
  <div className="max-w-2xl mx-auto">
    <div className={`h-6 w-3/4 rounded mb-4 ${shimmer}`} />
    <div className="card p-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className={`h-4 w-16 rounded ${shimmer}`} />
          <div className={`h-12 w-full rounded ${shimmer}`} />
        </div>
        <div className="space-y-2">
          <div className={`h-4 w-16 rounded ${shimmer}`} />
          <div className={`h-12 w-full rounded ${shimmer}`} />
        </div>
      </div>
      <div className="space-y-2">
        <div className={`h-4 w-20 rounded ${shimmer}`} />
        <div className={`h-24 w-full rounded ${shimmer}`} />
      </div>
      <div className={`h-12 w-32 rounded ${shimmer}`} />
    </div>
  </div>
)
