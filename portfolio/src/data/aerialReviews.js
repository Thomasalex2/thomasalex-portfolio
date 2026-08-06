/**
 * Aerial client reviews
 *
 * Paste reviews from Bark (or elsewhere) into `items` below.
 * The Reviews section on /aerial only appears when this list is not empty.
 *
 * Fields per review:
 *   name     - client name (e.g. "Sarah M.")
 *   stars    - number from 1 to 5
 *   review   - the review text
 *   location - town / area (e.g. "Galway")
 *   date     - when left (e.g. "4 August 2026")
 *
 * Tip: copy an existing block, paste a new one underneath, fill the fields.
 */

export const aerialReviews = {
  title: 'Client reviews',
  subtitle: 'Feedback from recent aerial jobs.',
  // Linked attribution under the subtitle. Set barkUrl to '' to hide the link.
  attribution: 'Via Bark',
  barkUrl: 'https://www.bark.com/en/ie/b/thomas-alex/37DOn/',
  items: [
    {
      name: 'John Corbett',
      stars: 5,
      review:
        'Thomas did a very professional job pictures and video was of excellent quality will use him again',
      location: 'Ennis, Co. Clare',
      date: '4 August 2026',
    },
    {
      name: 'Jack Morrissey',
      stars: 5,
      review:
        'We had Thomas come to our school and record drone footage of the grounds and take aerial images of the buildings. He did a fantastic job and got us exactly what we were looking for. The videos and images were high quality and we are very happy.',
      location: 'Waterford, Co. Waterford',
      date: '1 August 2026',
    },
  ],
}

export default aerialReviews
