import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

import {FcQuestions, FcCalculator, FcFolder, FcSettings} from 'react-icons/fc'

// import IframePreview from '../previews/IframePreview'

const remoteURL = 'https://cu-boulder-tuition-calculator.netlify.app/'
const localURL = 'http://localhost:3000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title('App Settings')
      .icon(FcSettings)
      .schemaType('siteSettings')
      .child(
        S.editor()
          .schemaType('siteSettings')
          .documentId('siteSettings')
          .title('App Settings')
      ),
      S.listItem()
        .title('Tuition Calculator')
        .icon(FcCalculator)
        .schemaType('calculator')
        .child(
          S.editor()
            .schemaType('calculator')
            .documentId('tuitionCalculator')
            .title('Tuition Calculator')
        ),
      S.listItem()
        .title('Questions')
        .icon(FcQuestions)
        .schemaType('question')
        .child(S.documentTypeList('question').title('Question')),
      S.listItem()
        .title('Categories')
        .icon(FcFolder)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Category')),
        S.divider(),
      ...S.documentTypeListItems().filter(
        listItem =>
          !['question', 'calculator', 'category', 'siteSettings', 'media.tag'].includes(
            listItem.getId()
          )
      )
    ])
