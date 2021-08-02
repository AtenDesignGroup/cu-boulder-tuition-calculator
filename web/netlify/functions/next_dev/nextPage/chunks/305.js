exports.id = 305;
exports.ids = [305,861];
exports.modules = {

/***/ 62305:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gH": function() { return /* binding */ getTuitionCalculatorDev; }
/* harmony export */ });
/* unused harmony exports sanityClient, previewClient, getClient, urlFor, usePreviewSubscription, getTuitionCalculator, getAllQuestions, getAllQuestionsDev */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63253);
/* harmony import */ var _sanity_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47572);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import client, { previewClient } from './sanity'
// const getClient = (preview) => (preview ? previewClient : client)


const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: "production" || 0,
  projectId: "85juwyag" || 0,
  useCdn: true,
  // useCdn: false,
  apiVersion: 'v1' // token: process.env.SANITY_API_TOKEN,
  // token: '',

  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/

};
const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__/* .createClient */ .eI)(config);
const previewClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__/* .createClient */ .eI)(_objectSpread(_objectSpread({}, config), {}, {
  // useCdn: true,
  useCdn: false // token: '',
  // apiVersion: 'v1',
  // token: process.env.NEXT_SANITY_API_TOKEN

}));
const getClient = usePreview => usePreview ? previewClient : sanityClient;
const urlFor = source => createImageUrlBuilder(config).image(source);
const usePreviewSubscription = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__/* .createPreviewSubscriptionHook */ .KF)(config);
async function getTuitionCalculator(preview) {
  const data = await getClient(preview).fetch(getTuitionCalculatorQuery);
  return data;
}
async function getTuitionCalculatorDev(preview) {
  const data = await getClient(preview).fetch(_sanity_queries__WEBPACK_IMPORTED_MODULE_0__/* .getTuitionCalculatorDevQuery */ .Cg);
  return data;
}
async function getAllQuestions(preview) {
  const data = await getClient(preview).fetch(getAllQuestionsQuery);
  return data;
}
async function getAllQuestionsDev(preview) {
  const data = await getClient(preview).fetch(getAllQuestionsDevQuery);
  return data;
}

/***/ }),

/***/ 47572:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cg": function() { return /* binding */ getTuitionCalculatorDevQuery; }
/* harmony export */ });
/* unused harmony exports getTuitionCalculatorQuery, getAllQuestionsQuery, getAllQuestionsDevQuery */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63253);
 // const $now = new Date().toISOString()

const getTuitionCalculatorDevQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__/* .groq */ .Ml`
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
}`;
const getTuitionCalculatorQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__/* .groq */ .Ml`
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
}`;
const getAllQuestionsQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__/* .groq */ .Ml`
*[_type in ["calculator", "siteSettings"]][0]{
  "tuitionCalculator": *[_type=="calculator" && _id=="tuitionCalculator"][0]{
    questions[] {
      _type == 'reference' => ^-> {
        ...
      }
    }
  },
  "siteSettings": *[_type == "siteSettings"][0]
}`;
const getAllQuestionsDevQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__/* .groq */ .Ml`
*[_type in ["calculator", "siteSettings"]][0]{
  "tuitionCalculator": *[_type=="calculator" && _id=="tuitionCalculatorDev"][0]{
    questions[] {
      _type == 'reference' => ^-> {
        ...
      }
    }
  },
  "siteSettings": *[_type == "siteSettings"][0]
}`;

/***/ })

};
;