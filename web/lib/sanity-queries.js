import { groq } from 'next-sanity'
// const $now = new Date().toISOString()

export const getTuitionCalculatorDevQuery = groq`
 *[_type in ["siteSettings", "calculator"]]{
  "tuitionCalculator": *[_type=="calculator" && _id=="tuitionCalculatorDev"][0]{
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

export const getAllQuestionsDevQuery = groq`
*[_type in ["calculator", "siteSettings"]][0]{
  "tuitionCalculator": *[_type=="calculator" && _id=="tuitionCalculatorDev"][0]{
    questions[] {
      _type == 'reference' => ^-> {
        ...
      }
    }
  },
  "siteSettings": *[_type == "siteSettings"][0]
}`