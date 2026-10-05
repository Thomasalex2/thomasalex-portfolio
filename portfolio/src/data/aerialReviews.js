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
 *   location  - town / area (e.g. "Galway")
 *   date      - when left (e.g. "4 August 2026")
 *   source     - where it was left (e.g. "Bark", "Google")
 *   sourceUrl  - public link to that review
 *   videoUrl   - optional link to the finished video
 *   videoLabel - text for that link (e.g. "Watch the Corrib Lodge video")
 *
 * Tip: copy an existing block, paste a new one underneath, fill the fields.
 */

const barkUrl = 'https://www.bark.com/en/ie/b/thomas-alex/37DOn/'

export const aerialReviews = {
  title: 'Client reviews',
  subtitle: 'Feedback from recent aerial jobs.',
  items: [
    {
      name: "Guglielmo de'Medici",
      stars: 5,
      review:
        'I commissioned Thomas to create a video for my hotel, Corrib Lodge in Connemara. He made the most of the views surrounding the property with a dynamic, high-quality video, selecting the best perspectives and focusing on key details like the rainbow and the lake. The editing he produced is exceptional and truly reflects his extensive experience. The pricing was also very competitive—the best offer I received among the many professionals I contacted. Highly recommended!',
      location: 'Connemara, Co. Galway',
      date: '1 October 2026',
      videoUrl: 'https://www.corriblodge.com/',
      videoLabel: 'Watch the Corrib Lodge video',
      source: 'Google',
      sourceUrl:
        'https://www.google.com/maps/reviews/@53.3834,-8.2177501,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pGQlFVTklWV2xzZFhGM1NUWlZRMjFWVWt0T2FFRRAB!2m1!1s0x0:0x927750a7808b1322',
    },
    {
      name: 'John Corbett',
      stars: 5,
      review:
        'Thomas did a very professional job pictures and video was of excellent quality will use him again',
      location: 'Ennis, Co. Clare',
      date: '4 August 2026',
      source: 'Bark',
      sourceUrl: barkUrl,
    },
    {
      name: 'Jack Morrissey',
      stars: 5,
      review:
        'We had Thomas come to our school and record drone footage of the grounds and take aerial images of the buildings. He did a fantastic job and got us exactly what we were looking for. The videos and images were high quality and we are very happy.',
      location: 'Waterford, Co. Waterford',
      date: '1 August 2026',
      source: 'Bark',
      sourceUrl: barkUrl,
    },
  ],
}

export default aerialReviews
