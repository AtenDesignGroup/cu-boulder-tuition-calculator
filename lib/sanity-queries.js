import { groq } from 'next-sanity'

// const $now = new Date().toISOString()

export const getTuitionCalculatorQuery = groq`
 *[_type in ["siteSettings", "calculator"]]{
  "tuitionCalculator": *[_type=="calculator" && _id=="tuitionCalculator"][0]{
    ...,
    title,
    description,
    categories[] {
    _type == 'reference' => ^-> {
        ...,
        lineItems[] {
          ...,
          itemValue[] {
            ...,
            // logicSourceQuestion->
          }
        }
      }
    },
    questions[] {
      _type == 'reference' => ^-> {
        ...
      }
    }
  },
  "siteSettings": *[_type == "siteSettings"][0],
}`

// export async function getAllQuestionsWithSlug() {
//   const data = await client.fetch(`*[_type == "question"]{ 'slug': _id }`)
//   return data
// }

// export const getAllQuestionsWithSlug = groq`
//   *[_type == "question"]{'_id': _id }`


export const getAllQuestionsQuery = groq`
*[_type in ["calculator", "siteSettings"]][0]{
  "tuitionCalculator": *[_type=="calculator" && _id=="tuitionCalculator"][0]{
    questions[] {
      _type == 'reference' => ^-> {
        ...
      }
    }
  },
  "siteSettings": *[_type == "siteSettings"][0]
}`

