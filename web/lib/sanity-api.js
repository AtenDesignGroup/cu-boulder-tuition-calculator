// import client, { previewClient } from './sanity'

// const getClient = (preview) => (preview ? previewClient : client)

import {
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook
} from 'next-sanity'
import {
  getTuitionCalculatorQuery,
  getTuitionCalculatorDevQuery,
  getAllQuestionsQuery,
  getAllQuestionsDevQuery,
  getTuitionHomeQuery,
  getTuitionHomeDevQuery
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
  // useCdn: process.env.NODE_ENV === "production",
  useCdn: false,
  apiVersion: 'v1',
  // token: process.env.SANITY_API_TOKEN,
  // token: '',
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
}
export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  // useCdn: true,
  useCdn: false,
  // token: '',
  // apiVersion: 'v1',
  // token: process.env.NEXT_SANITY_API_TOKEN
})

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export async function getTuitionCalculator (preview) {
  const data = await getClient(preview).fetch(getTuitionCalculatorQuery)
  return data
}

export async function getTuitionCalculatorDev (preview) {
  const data = await getClient(preview).fetch(getTuitionCalculatorDevQuery)
  return data
}

export async function getAllQuestions(preview) {
  const data = await getClient(preview).fetch(getAllQuestionsQuery)
  return data
}

export async function getAllQuestionsDev(preview) {
  const data = await getClient(preview).fetch(getAllQuestionsDevQuery)
  return data
}

export async function getTuitionHome (preview) {
  const data = await getClient(preview).fetch(getTuitionHomeQuery)
  return data
}

export async function getTuitionHomeDev (preview) {
  const data = await getClient(preview).fetch(getTuitionHomeDevQuery)
  return data
}