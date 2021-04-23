import { groq } from 'next-sanity'

// const $now = new Date().toISOString()

export const getHomePageQuery = groq`
 *[_type in ["siteSettings", "calculator"]]{
  "tuitionCalculator": *[_type=="calculator" && _id=="tuitionCalculator"][0]{
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
  },
  "siteSettings": *[_type == "siteSettings"][0],
}`
