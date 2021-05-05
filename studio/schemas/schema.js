// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import richDate from 'part:@sanity/form-builder/input/rich-date/schema'

// document schemas
import calculator from './documents/calculator'
import question from './documents/question'
import comment from './documents/comment'
import siteSettings from './documents/siteSettings'

// Object types
import siteLink from './objects/siteLink'
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import seo from './objects/seo'
import youtube from './objects/youtube'
import pdfFile from './objects/pdfFile'
import iframe from './objects/iframe'
import link from './objects/link'
import singleLink from './objects/singleLink'
import vimeo from './objects/vimeo'
import optionSet from './objects/optionSet'
import option from './objects/option'
import optionLogic from './objects/optionLogic'
import category from './documents/category'
import lineItem from './objects/lineItem'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    category,
    calculator,
    question,
    comment,
    bodyPortableText,
    mainImage,
    richDate,
    siteLink,
    seo,
    youtube,
    pdfFile,
    iframe,
    link,
    singleLink,
    vimeo,
    option,
    optionSet,
    optionLogic,
    lineItem
  ])
})
