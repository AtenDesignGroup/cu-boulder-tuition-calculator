/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1451:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ QuestionPage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__(12918);
// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(26341);
// EXTERNAL MODULE: ./components/calculator/index.js + 2 modules
var calculator = __webpack_require__(93570);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/spinner/dist/esm/spinner.js
var spinner = __webpack_require__(45754);
// EXTERNAL MODULE: ./node_modules/next-sanity/dist/next-sanity.cjs.production.min.js
var next_sanity_cjs_production_min = __webpack_require__(63253);
;// CONCATENATED MODULE: ./lib/sanity-queries.js
 // const $now = new Date().toISOString()

const sanity_queries_getTuitionCalculatorDevQuery = next_sanity_cjs_production_min/* groq */.Ml`
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
const sanity_queries_getTuitionCalculatorQuery = next_sanity_cjs_production_min/* groq */.Ml`
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
const getAllQuestionsQuery = next_sanity_cjs_production_min/* groq */.Ml`
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
const sanity_queries_getAllQuestionsDevQuery = next_sanity_cjs_production_min/* groq */.Ml`
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
;// CONCATENATED MODULE: ./lib/sanity-api.js
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
const sanityClient = (0,next_sanity_cjs_production_min/* createClient */.eI)(config);
const previewClient = (0,next_sanity_cjs_production_min/* createClient */.eI)(_objectSpread(_objectSpread({}, config), {}, {
  // useCdn: true,
  useCdn: false // token: '',
  // apiVersion: 'v1',
  // token: process.env.NEXT_SANITY_API_TOKEN

}));
const getClient = usePreview => usePreview ? previewClient : sanityClient;
const urlFor = source => createImageUrlBuilder(config).image(source);
const usePreviewSubscription = (0,next_sanity_cjs_production_min/* createPreviewSubscriptionHook */.KF)(config);
async function getTuitionCalculator(preview) {
  const data = await getClient(preview).fetch(getTuitionCalculatorQuery);
  return data;
}
async function getTuitionCalculatorDev(preview) {
  const data = await getClient(preview).fetch(getTuitionCalculatorDevQuery);
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
;// CONCATENATED MODULE: ./pages/question/[_id].js







function QuestionPage({
  question,
  questions,
  siteSettings,
  slug,
  position
}) {
  const router = (0,next_router.useRouter)();

  if (!router.isFallback && !(question !== null && question !== void 0 && question._id)) {
    return /*#__PURE__*/jsx_runtime.jsx(error.default, {
      statusCode: 404
    });
  }

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime.jsx(spinner/* Spinner */.$, {
      size: "md"
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx(layout/* Layout */.A, {
    siteSettings: siteSettings,
    position: position,
    totalQuestions: questions.length,
    children: questions && /*#__PURE__*/jsx_runtime.jsx(calculator/* Calculator */.y, {
      slug: position,
      questions: questions,
      question: question
    })
  });
}
const getStaticProps = async ({
  params
}) => {
  var _pages$tuitionCalcula, _pages$tuitionCalcula2, _pages$tuitionCalcula3;

  const slug = params === null || params === void 0 ? void 0 : params._id;
  const pages = await getAllQuestions();
  const question = (pages === null || pages === void 0 ? void 0 : (_pages$tuitionCalcula = pages.tuitionCalculator) === null || _pages$tuitionCalcula === void 0 ? void 0 : (_pages$tuitionCalcula2 = _pages$tuitionCalcula.questions) === null || _pages$tuitionCalcula2 === void 0 ? void 0 : _pages$tuitionCalcula2.find(s => s._id === slug)) || null;
  const questions = (pages === null || pages === void 0 ? void 0 : (_pages$tuitionCalcula3 = pages.tuitionCalculator) === null || _pages$tuitionCalcula3 === void 0 ? void 0 : _pages$tuitionCalcula3.questions) || null;
  const position = questions === null || questions === void 0 ? void 0 : questions.indexOf(question);
  const siteSettings = (pages === null || pages === void 0 ? void 0 : pages.siteSettings) || null;
  return {
    props: {
      question,
      questions,
      siteSettings,
      slug,
      position
    },
    revalidate: 10
  };
};
async function getStaticPaths() {
  var _pageData$tuitionCalc, _pageData$tuitionCalc2;

  const pageData = await getAllQuestions();
  const pages = pageData === null || pageData === void 0 ? void 0 : (_pageData$tuitionCalc = pageData.tuitionCalculator) === null || _pageData$tuitionCalc === void 0 ? void 0 : (_pageData$tuitionCalc2 = _pageData$tuitionCalc.questions) === null || _pageData$tuitionCalc2 === void 0 ? void 0 : _pageData$tuitionCalc2.map(q => ({
    params: {
      _id: q._id
    }
  }));
  return {
    paths: pages || null,
    fallback: false
  };
}

/***/ }),

/***/ 14434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"NEXT_PUBLIC_SANITY_PROJECT_ID=\"85juwyag\"\nNEXT_PUBLIC_SANITY_DATASET=\"production\"\nNEXT_PUBLIC_GOOGLE_ANALYTICS=\"G-CMFB1GB8W8\"\n\n# Sanity Token - Website Preview (Read+Write)\nSANITY_API_TOKEN=\"skk8oO9ePBlfcSsrqC02i3ZjbUAslZh9qtp4dSxNUxvrtiZ7eMxop1HUS4fANq9tz80RtHMv6PT0BE9k4DjoglFfsbLm6howieB6FL0FXse0ScYeecm7BOhxWwWvxj6cC4vV0QMx3uaJ2RCYjicscsqLeWJs6Wuh5ZN6hQs6H2lgWfcehdgB\"\nSANITY_PREVIEW_SECRET=\"\"\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(53789)

      const appMod = __webpack_require__(35579)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(1451)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/question/[_id]",
        buildId: "SDGEsWfb7CL-FCsfdcuLY",
        escapedBuildId: "SDGEsWfb7CL\-FCsfdcuLY",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"7655728757fa891dc67c3c439c4c97f6",previewModeSigningKey:"a91b3fd900e0b0702415576e1c8aca6edf350b847065f4186ee1a3cc8fb36fb6",previewModeEncryptionKey:"7f24558e70ae86a9742c8fa99910057a184577b4cfba186faf2931c496056ffa"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ (function(module) {

module.exports = require("assert");;

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 11631:
/***/ (function(module) {

module.exports = require("net");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 4016:
/***/ (function(module) {

module.exports = require("tls");;

/***/ }),

/***/ 33867:
/***/ (function(module) {

module.exports = require("tty");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [833,340,808,842,281,672,39,943,274], function() { return __webpack_require__(14434); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			0: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(833);
/******/ 			__webpack_require__.e(340);
/******/ 			__webpack_require__.e(808);
/******/ 			__webpack_require__.e(842);
/******/ 			__webpack_require__.e(281);
/******/ 			__webpack_require__.e(672);
/******/ 			__webpack_require__.e(39);
/******/ 			__webpack_require__.e(943);
/******/ 			__webpack_require__.e(274);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;