import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import {
  MdSettings,
  MdPerson,
  MdPeople,
  MdDescription,
  MdLocalOffer,
  FaNewspaper,
  AiFillTags
} from 'react-icons/md'

// HiClipboardList
// HiCalculator
// HiQuestionMarkCircle

// FaEquals

// VscChecklist
// VscGrabber =

// FcCalculator
// FcList or FcTodoList FcViewDetails
// FcQuestions

import {FcSettings, FcQuestions, FcCalculator, FcList, FcTodoList, FcViewDetails, FcSurvey} from 'react-icons/fc'

import IframePreview from '../previews/IframePreview'

// const QuestionIcon = () => <span style={{fontSize: '1.5rem'}}>{'?'}</span>
// const CalculatorIcon = () => <span style={{fontSize: '1.5rem'}}>{'🧮'}</span>

// TODO: Web preview configuration
const remoteURL = 'https://cu-boulder-tuition-calculator.netlify.app/'
const localURL = 'http://localhost:3000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

// export const getDefaultDocumentNode = props => {
//   const {schemaType} = props
//   if (schemaType === 'post') {
//     return S.document().views([
//       S.view.form(),
//       S.view
//         .component(IframePreview)
//         .title('Web preview')
//         .options({previewURL})
//     ])
//   }
//   return S.document().views([S.view.form()])
// }

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
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
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

      ...S.documentTypeListItems().filter(
        listItem =>
          !['question', 'comment', 'calculator', 'siteSettings'].includes(
            listItem.getId()
          )
      )
    ])
