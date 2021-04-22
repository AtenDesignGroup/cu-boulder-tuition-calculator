import { groq } from 'next-sanity'

import client, { previewClient } from '@/lib/sanity'

const getClient = (preview) => (preview ? previewClient : client)

export const getAppQuery = groq`
*[_type in ["siteSettings", "calculator", "question"]][0]{
  "siteSettings": *[_type == "siteSettings"][0],
  "calculator": *[_type == "calculator"][0]{
  // "question": *[_type == "question"],
    ...,
    "questions": *[_type == "question" ]
  },
}`

export async function getSiteSettings () {
  const results = await getClient()
    .fetch(` *[_id == "siteSettings"] {
      ...
    }[0]`)
  return results
}

export async function getTuitionCalculator () {
  const results = await getClient()
    .fetch(`*[_id == "tuitionCalculator"] {
      ...
    }[0]`)
  return results
}

export async function getApp () {
  const results = await getClient()
    .fetch(`*[_id == "tuitionCalculator"] {
      ...
    }[0]`)
  return results
}
