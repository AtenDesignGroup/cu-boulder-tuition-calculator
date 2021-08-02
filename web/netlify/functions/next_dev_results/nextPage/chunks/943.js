exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 26341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__(68054);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./components/head.js




const Head = ({
  children,
  title,
  description
}) => /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
  children: /*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
    children: [/*#__PURE__*/jsx_runtime.jsx("meta", {
      charSet: "UTF-8"
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    }), /*#__PURE__*/jsx_runtime.jsx("title", {
      children: title || ''
    }), /*#__PURE__*/jsx_runtime.jsx("meta", {
      name: "description",
      content: description || ''
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "preconnect",
      href: "https://cdn.sanity.io"
    }), children]
  })
});
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/flex.js
var flex = __webpack_require__(94096);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/text.js
var esm_text = __webpack_require__(64115);
;// CONCATENATED MODULE: ./components/footer.js




function Footer() {
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx(flex/* Flex */.k, {
      as: "footer",
      width: "100%",
      borderTop: "1px solid #eaeaea",
      justifyContent: "center",
      alignItems: "center",
      py: "5",
      mt: "16",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_text/* Text */.x, {
        fontSize: "xs",
        color: "gray.600",
        children: ["Powered by ", /*#__PURE__*/jsx_runtime.jsx("a", {
          href: "https://sanity.io",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Sanity.io"
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/little-state-machine/dist/little-state-machine.js
var little_state_machine = __webpack_require__(11240);
// EXTERNAL MODULE: ./hooks/updateAction.js
var updateAction = __webpack_require__(69166);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/box.js
var box = __webpack_require__(48017);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/heading.js
var heading = __webpack_require__(336);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/esm/button.js + 1 modules
var esm_button = __webpack_require__(56185);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/code.js
var code = __webpack_require__(47922);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(53854);
;// CONCATENATED MODULE: ./components/calculator/debug.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Debug() {
  const router = (0,next_router.useRouter)();
  const {
    actions,
    state
  } = (0,little_state_machine/* useStateMachine */.j_)({
    updateAction: updateAction/* default */.Z
  });
  const {
    questions
  } = state.calculator;

  const clearData = () => {
    // console.clear()
    actions.updateAction(_objectSpread(_objectSpread({}, state), {}, {
      calculator: {
        currentQuestion: 0,
        lastQuestion: null,
        showResults: false,
        questions: [],
        results: [],
        totalSemesters: 1
      }
    }));

    if (dev) {
      router.push(`/dev`);
    } else {
      router.push(`/`);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(box/* Box */.xu, {
    p: "4",
    overflow: "auto",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
      justifyContent: "space-between",
      children: [/*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
        size: "lg",
        children: "My Data"
      }), /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
        rightIcon: /*#__PURE__*/jsx_runtime.jsx(index_esm/* HiTrash */._YF, {}),
        size: "sm",
        colorScheme: "red",
        variant: "outline",
        onClick: () => clearData(),
        children: "Clear Data"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(code/* Code */.E, {
      colorScheme: "gray.200",
      children: /*#__PURE__*/jsx_runtime.jsx("pre", {
        children: JSON.stringify(state.calculator, 0, 2)
      })
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/@chakra-ui/hooks/dist/esm/use-disclosure.js
var use_disclosure = __webpack_require__(74860);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/alert/dist/esm/alert.js + 1 modules
var esm_alert = __webpack_require__(27302);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/esm/drawer.js + 1 modules
var drawer = __webpack_require__(68135);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/esm/modal.js + 15 modules
var modal = __webpack_require__(97586);
;// CONCATENATED MODULE: ./components/layout.js









function Layout({
  children,
  siteSettings,
  dev,
  position,
  totalQuestions,
  status
}) {
  var _siteSettings$seoSett, _siteSettings$seoSett2;

  const {
    isOpen,
    onOpen,
    onClose
  } = (0,use_disclosure/* useDisclosure */.q)();
  const btnRef = (0,react.useRef)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Head, {
      title: (siteSettings === null || siteSettings === void 0 ? void 0 : (_siteSettings$seoSett = siteSettings.seoSettings) === null || _siteSettings$seoSett === void 0 ? void 0 : _siteSettings$seoSett.title) || '',
      description: (siteSettings === null || siteSettings === void 0 ? void 0 : (_siteSettings$seoSett2 = siteSettings.seoSettings) === null || _siteSettings$seoSett2 === void 0 ? void 0 : _siteSettings$seoSett2.description) || ''
    }), dev && /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_alert/* Alert */.bZ, {
      status: "warning",
      w: "100%",
      position: "fixed",
      top: "0",
      children: [/*#__PURE__*/jsx_runtime.jsx(esm_alert/* AlertIcon */.zM, {}), "You are currently using the dev app."]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
      height: "100vh",
      flexDir: "column",
      maxWidth: "1120px",
      mx: "auto",
      px: "15px",
      pt: "3rem",
      mt: dev ? '48px' : '0',
      children: [children, dev && /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        pb: "4",
        pl: "4",
        children: /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
          ref: btnRef,
          colorScheme: "blue",
          onClick: onOpen,
          display: "inline-block",
          isFullWidth: false,
          variant: "outline",
          size: "sm",
          children: "Debug"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(Footer, {})]
    }), dev && /*#__PURE__*/jsx_runtime.jsx(drawer/* Drawer */.dy, {
      isOpen: isOpen,
      placement: "right",
      onClose: onClose,
      finalFocusRef: btnRef,
      size: "sm",
      blockScrollOnMount: false,
      children: /*#__PURE__*/jsx_runtime.jsx(modal/* ModalOverlay */.ZA, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(drawer/* DrawerContent */.sc, {
          children: [/*#__PURE__*/jsx_runtime.jsx(modal/* ModalCloseButton */.ol, {}), /*#__PURE__*/jsx_runtime.jsx(modal/* ModalHeader */.xB, {
            children: "Debug App"
          }), /*#__PURE__*/jsx_runtime.jsx(modal/* ModalBody */.fe, {
            children: /*#__PURE__*/jsx_runtime.jsx(Debug, {})
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ 81725:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": function() { return /* binding */ Text; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next-sanity/dist/next-sanity.cjs.production.min.js
var next_sanity_cjs_production_min = __webpack_require__(63253);
;// CONCATENATED MODULE: ./utils/sanity.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: "production",
  projectId: "85juwyag",
  apiVersion: 'v1',
  // useCdn: false,
  useCdn: true // token: '',
  // token: process.env.SANITY_API_TOKEN,
  // useCdn: process.env.NODE_ENV === 'production'

  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/

};

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

if (!config.dataset) {
  throw Error('The dataset name is not set. Check your environment variables.');
}
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/


const urlFor = source => createImageUrlBuilder(config).image(source); // Set up the live preview subsscription hook

const usePreviewSubscription = (0,next_sanity_cjs_production_min/* createPreviewSubscriptionHook */.KF)(config); // Set up Portable Text serialization

const PortableText = (0,next_sanity_cjs_production_min/* createPortableTextComponent */.Kz)(_objectSpread(_objectSpread({}, config), {}, {
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {}
})); // Set up the client for fetching data in the getProps page functions

const sanityClient = (0,next_sanity_cjs_production_min/* createClient */.eI)(config); // Set up a preview client with serverless authentication for drafts

const previewClient = (0,next_sanity_cjs_production_min/* createClient */.eI)(_objectSpread(_objectSpread({}, config), {}, {
  // apiVersion: 'v1',
  useCdn: false // useCdn: false

})); // Helper function for easily switching between normal client and preview client

const getClient = usePreview => usePreview ? previewClient : sanityClient;
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(35063);
;// CONCATENATED MODULE: ./components/serializers/serializers.js



/* eslint-disable react/display-name */


const serializers = {
  marks: {
    link: ({
      mark,
      children
    }) => {
      const {
        blank,
        href
      } = mark;

      if (!href) {
        return null;
      }

      return blank === true ? /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: href.includes('https') || href.includes('http') ? /*#__PURE__*/jsx_runtime.jsx("a", {
          href: href,
          target: "_blank",
          rel: "noopener noreferrer",
          children: children
        }) : /*#__PURE__*/jsx_runtime.jsx("a", {
          href: href,
          children: children
        })
      }) : /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: href.includes('https') || href.includes('http') || href.includes('tel') || href.includes('mailto') ? /*#__PURE__*/jsx_runtime.jsx("a", {
          href: href,
          children: children
        }) : /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: href,
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            children: children
          })
        })
      });
    }
  },
  list: props => {
    // console.log({ props })
    switch (props.type) {
      case 'number':
        {
          return /*#__PURE__*/jsx_runtime.jsx("ol", {
            children: props.children
          });
        }

      case 'bullet':
        {
          return /*#__PURE__*/jsx_runtime.jsx("ul", {
            children: props.children
          });
        }

      default:
        {
          return /*#__PURE__*/jsx_runtime.jsx("ul", {
            children: props.children
          });
        }
    }
  }
};
/* harmony default export */ var serializers_serializers = (serializers);
;// CONCATENATED MODULE: ./components/serializers/text.js



function Text({
  blocks
}) {
  var _blocks$;

  // console.log({ blocks })
  // TODO: Test this conditional logic out more to make sure it's SOLID
  return blocks !== null && blocks !== void 0 && blocks.length && (_blocks$ = blocks[0]) !== null && _blocks$ !== void 0 && _blocks$.children.length ? /*#__PURE__*/jsx_runtime.jsx(PortableText, {
    blocks: blocks,
    serializers: serializers_serializers
  }) : null;
}

/***/ }),

/***/ 69166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ updateAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateAction(state, payload) {
  // console.log('state:', state)
  // console.log('payload:', payload)
  return _objectSpread(_objectSpread({}, state), payload);
}

/***/ })

};
;