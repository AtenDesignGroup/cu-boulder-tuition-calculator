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

// export const getTuitionCalculatorQuery2 = groq`
//  *[_type=="category"]{
//   title,
//   lineItems[] {
//     optionLogics[] {
//       ...,
//       logicSourceQuestion->
//     }
//   }
// }`
  // "relatedMovies": *[_type=='movie' && references(^._id)]{ title }

