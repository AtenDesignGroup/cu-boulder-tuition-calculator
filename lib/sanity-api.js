// import client, { previewClient } from './sanity'

// const getClient = (preview) => (preview ? previewClient : client)

import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook
} from 'next-sanity'
import {
  getTuitionCalculatorQuery,
  // getAllQuestionsWithSlug,
  getAllQuestionsQuery
} from './sanity-queries'

const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true
  // useCdn: process.env.NODE_ENV === 'production'
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
}
export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: true,
  // useCdn: false,
  token: process.env.NEXT_SANITY_API_TOKEN
})

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export async function getTuitionCalculator (preview) {
  const data = await getClient(preview).fetch(getTuitionCalculatorQuery)
  return data
}

// export async function getQuestionPage (preview) {
//   const data = await getClient(preview).fetch(getAllQuestionsWithSlug)
//   return data
// }

// export async function getQuestionBySlug(_id) {
//   const data = await getClient(true).fetch(
//     `*[_type == "question" && _id == $_id]{
//       ...
//     }`,
//     { _id }
//   )
//   return data[0]
// }

export async function getAllQuestions(preview) {
  const data = await getClient(preview).fetch(getAllQuestionsQuery)
  return data
}