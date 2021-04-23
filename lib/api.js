import { groq } from 'next-sanity'

import client, { previewClient } from '@/lib/sanity'

const getClient = (preview) => (preview ? previewClient : client)

export const getParentCoursesPageQuery = groq`
*[_type=="calculator" && _id=="tuitionCalculator"]{
  ...,
  title,
  description,
  categories[] {
  _type == 'reference' => ^-> {
      title
    }
  },
  questions[] {
  _type == 'reference' => ^->,
  }
}
`

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
