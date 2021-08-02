exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1361:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": function() { return /* binding */ Results; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/little-state-machine/dist/little-state-machine.js
var little_state_machine = __webpack_require__(11240);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(35063);
// EXTERNAL MODULE: ./hooks/updateAction.js
var hooks_updateAction = __webpack_require__(69166);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/hooks/dist/esm/use-disclosure.js
var use_disclosure = __webpack_require__(74860);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/flex.js
var flex = __webpack_require__(94096);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/heading.js
var heading = __webpack_require__(336);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/text.js
var esm_text = __webpack_require__(64115);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/box.js
var box = __webpack_require__(48017);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/esm/button.js + 1 modules
var esm_button = __webpack_require__(56185);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/transition/dist/esm/collapse.js
var collapse = __webpack_require__(15267);
// EXTERNAL MODULE: ./components/serializers/text.js + 2 modules
var serializers_text = __webpack_require__(81725);
// EXTERNAL MODULE: ./node_modules/react-countup/build/index.js
var build = __webpack_require__(17857);
;// CONCATENATED MODULE: ./components/counter/index.js


function Counter({
  target,
  duration
}) {
  return /*#__PURE__*/jsx_runtime.jsx(build/* default */.ZP, {
    start: 0,
    end: target,
    duration: duration,
    separator: ",",
    prefix: "$",
    decimals: 2,
    useEasing: true
  });
}
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(5434);
;// CONCATENATED MODULE: ./utils/results.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function showArray(data, questions) {
  var _data$optionLogics;

  const {
    optionLogicConditional
  } = data;
  let showQuestion = [];
  let returnVal = false;
  data === null || data === void 0 ? void 0 : (_data$optionLogics = data.optionLogics) === null || _data$optionLogics === void 0 ? void 0 : _data$optionLogics.map(logic => {
    // String Logic
    if (logic._type === 'optionLogic') {
      var _questions$logic$logi;

      if (((_questions$logic$logi = questions[logic.logicSourceQuestion._ref]) === null || _questions$logic$logi === void 0 ? void 0 : _questions$logic$logi.answer) === logic.logicSourceValue) {
        showQuestion.push('show');
      } else {
        showQuestion.push('hide');
      } // Numeric Operational Logic

    } else if (logic._type === 'optionNumericLogic') {
      var _questions$logic$logi2, _logic$logicSourceQue;

      let questionVal = Number((_questions$logic$logi2 = questions[logic === null || logic === void 0 ? void 0 : (_logic$logicSourceQue = logic.logicSourceQuestion) === null || _logic$logicSourceQue === void 0 ? void 0 : _logic$logicSourceQue._ref]) === null || _questions$logic$logi2 === void 0 ? void 0 : _questions$logic$logi2.answer);
      let logicVal = logic === null || logic === void 0 ? void 0 : logic.operatorValue;
      let mathOperation = logic === null || logic === void 0 ? void 0 : logic.mathOperation;
      showQuestion.push(operatorMagic(questionVal, mathOperation, logicVal));
    } else {
      showQuestion.push('hide');
    }

    return showQuestion;
  })[0];

  if (!optionLogicConditional) {
    returnVal = false;
  } else if (showQuestion.length < 1) {
    returnVal = true;
  } else if (optionLogicConditional === null || !optionLogicConditional) {
    returnVal = true;
  } else if (optionLogicConditional === 'and') {
    showQuestion.includes('hide') ? returnVal = false : returnVal = true;
  } else if (optionLogicConditional === 'or') {
    showQuestion.includes('show') ? returnVal = true : returnVal = false;
  } // returnVal === true && updateStateResults(catID, data.title, data.frequency)
  // console.log(returnVal)


  return returnVal;
}
function totalGenerator(itemValue, questions) {
  let total = 0;
  const valueType = (itemValue === null || itemValue === void 0 ? void 0 : itemValue._type) || null;
  const value = (itemValue === null || itemValue === void 0 ? void 0 : itemValue.value) || 0;
  let math = null;
  let valueQuestionID = null; // CALCULATED VALUE

  if (valueType === 'calculatedValue') {
    var _itemValue$logicSourc, _questions$valueQuest;

    math = itemValue === null || itemValue === void 0 ? void 0 : itemValue.mathOperation;
    valueQuestionID = itemValue === null || itemValue === void 0 ? void 0 : (_itemValue$logicSourc = itemValue.logicSourceQuestion) === null || _itemValue$logicSourc === void 0 ? void 0 : _itemValue$logicSourc._ref;
    const myQuestionAnswer = parseInt(((_questions$valueQuest = questions[valueQuestionID]) === null || _questions$valueQuest === void 0 ? void 0 : _questions$valueQuest.answer) || 0); // console.log({myQuestionAnswer})

    if (math === 'multiplication') {
      total = value * myQuestionAnswer;
    } else if (math === 'addition') {
      total = value + myQuestionAnswer;
    } else if (math === 'division') {
      total = value / myQuestionAnswer;
    } else if (math === 'subtraction') {
      total = value - myQuestionAnswer;
    }
  } // SIMPLE VALUE


  if (valueType === 'simpleValue') {
    // console.log('simpleValue')
    total = total + value;
  } // console.log({ valueType, valueQuestionID, math, value, total })


  return total;
}
function toFixedNumber(num, digits, base) {
  var pow = Math.pow(base || 10, digits);
  return Math.round(num * pow) / pow;
}
function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1) || "";
}

const operatorMagic = (questionVal, mathOperation, logicVal) => {
  // console.log(`questionVal: ${questionVal}, mathOperation: ${mathOperation}, logicVal: ${logicVal}`)
  if (mathOperation === 'equals') {
    return questionVal === logicVal ? 'show' : 'hide';
  } else if (mathOperation === 'doesNotEqual') {
    return questionVal !== logicVal ? 'show' : 'hide';
  } else if (mathOperation === 'lessThan') {
    return questionVal < logicVal ? 'show' : 'hide';
  } else if (mathOperation === 'lessThanOrEquals') {
    return questionVal <= logicVal ? 'show' : 'hide';
  } else if (mathOperation === 'greaterThan') {
    return questionVal > logicVal ? 'show' : 'hide';
  } else if (mathOperation === 'greaterThanOrEquals') {
    return questionVal >= logicVal ? 'show' : 'hide';
  } else {
    return 'hide';
  }
};

function CalculateResults() {
  const {
    actions,
    state
  } = useStateMachine({
    updateAction
  });
  const {
    _key,
    description,
    itemValue,
    frontEndTitle,
    frequency,
    optionLogics,
    optional,
    optionLogicConditional
  } = data;
  const {
    questions,
    semesters,
    results,
    totalSemesters
  } = state.calculator;

  const showArray = () => {
    var _data, _data$optionLogics2;

    let showQuestion = [];
    let returnVal = false;
    (_data = data) === null || _data === void 0 ? void 0 : (_data$optionLogics2 = _data.optionLogics) === null || _data$optionLogics2 === void 0 ? void 0 : _data$optionLogics2.map(logic => {
      // String Logic
      if (logic._type === 'optionLogic') {
        var _questions$logic$logi3;

        if (((_questions$logic$logi3 = questions[logic.logicSourceQuestion._ref]) === null || _questions$logic$logi3 === void 0 ? void 0 : _questions$logic$logi3.answer) === logic.logicSourceValue) {
          showQuestion.push('show');
        } else {
          showQuestion.push('hide');
        } // Numeric Operational Logic

      } else if (logic._type === 'optionNumericLogic') {
        var _questions$logic$logi4, _logic$logicSourceQue2;

        let questionVal = Number((_questions$logic$logi4 = questions[logic === null || logic === void 0 ? void 0 : (_logic$logicSourceQue2 = logic.logicSourceQuestion) === null || _logic$logicSourceQue2 === void 0 ? void 0 : _logic$logicSourceQue2._ref]) === null || _questions$logic$logi4 === void 0 ? void 0 : _questions$logic$logi4.answer);
        let logicVal = logic === null || logic === void 0 ? void 0 : logic.operatorValue;
        let mathOperation = logic === null || logic === void 0 ? void 0 : logic.mathOperation;
        showQuestion.push(operatorMagic(questionVal, mathOperation, logicVal));
      } else {
        showQuestion.push('hide');
      }

      return showQuestion;
    })[0];

    if (showQuestion.length < 1) {
      returnVal = true;
    } else if (optionLogicConditional === null || !optionLogicConditional) {
      returnVal = true;
    } else if (optionLogicConditional === 'and') {
      showQuestion.includes('hide') ? returnVal = false : returnVal = true;
    } else if (optionLogicConditional === 'or') {
      showQuestion.includes('show') ? returnVal = true : returnVal = false;
    } // returnVal === true && updateStateResults(catID, data.title, data.frequency)


    return returnVal;
  };

  const operatorMagic = (questionVal, mathOperation, logicVal) => {
    // console.log(`questionVal: ${questionVal}, mathOperation: ${mathOperation}, logicVal: ${logicVal}`)
    if (mathOperation === 'equals') {
      return questionVal === logicVal ? 'show' : 'hide';
    } else if (mathOperation === 'doesNotEqual') {
      return questionVal !== logicVal ? 'show' : 'hide';
    } else if (mathOperation === 'lessThan') {
      return questionVal < logicVal ? 'show' : 'hide';
    } else if (mathOperation === 'lessThanOrEquals') {
      return questionVal <= logicVal ? 'show' : 'hide';
    } else if (mathOperation === 'greaterThan') {
      return questionVal > logicVal ? 'show' : 'hide';
    } else if (mathOperation === 'greaterThanOrEquals') {
      return questionVal >= logicVal ? 'show' : 'hide';
    } else {
      return 'hide';
    }
  };

  const TotalGenerator = () => {
    let total = 0;
    const valueType = (itemValue === null || itemValue === void 0 ? void 0 : itemValue._type) || null;
    const value = (itemValue === null || itemValue === void 0 ? void 0 : itemValue.value) || 0;
    let math = null;
    let valueQuestionID = null; // CALCULATED VALUE

    if (valueType === 'calculatedValue') {
      var _itemValue$logicSourc2, _questions$valueQuest2;

      math = itemValue === null || itemValue === void 0 ? void 0 : itemValue.mathOperation;
      valueQuestionID = itemValue === null || itemValue === void 0 ? void 0 : (_itemValue$logicSourc2 = itemValue.logicSourceQuestion) === null || _itemValue$logicSourc2 === void 0 ? void 0 : _itemValue$logicSourc2._ref;
      const myQuestionAnswer = parseInt(((_questions$valueQuest2 = questions[valueQuestionID]) === null || _questions$valueQuest2 === void 0 ? void 0 : _questions$valueQuest2.answer) || 0); // console.log({myQuestionAnswer})

      if (math === 'multiplication') {
        total = value * myQuestionAnswer;
      } else if (math === 'addition') {
        total = value + myQuestionAnswer;
      } else if (math === 'division') {
        total = value / myQuestionAnswer;
      } else if (math === 'subtraction') {
        total = value - myQuestionAnswer;
      }
    } // SIMPLE VALUE


    if (valueType === 'simpleValue') {
      // console.log('simpleValue')
      total = total + value;
    } // console.log({ valueType, valueQuestionID, math, value, total })


    return total;
  };

  useEffect(() => {
    // console.log('useEffect')
    // console.log({questions})
    // console.log(state.calculator.questions)
    // console.log({results})
    // console.log(state.calculator.results)
    // console.log({catID})
    // console.log(data.frontEndTitle)
    // console.log(data.frequency)
    // console.log(TotalGenerator())
    // console.log(state.calculator.results[catID])
    // console.log({_key})
    if (showArray() === true) {
      actions.updateAction(_objectSpread(_objectSpread({}, state), {}, {
        calculator: _objectSpread(_objectSpread({}, state.calculator), {}, {
          results: _objectSpread(_objectSpread({}, state.calculator.results), {}, {
            [catID]: _objectSpread(_objectSpread({}, state.calculator.results[catID]), {}, {
              title: catTitle,
              [_key]: {
                title: data.frontEndTitle,
                frequency: data.frequency,
                value: TotalGenerator()
              }
            })
          })
        })
      }));
    }
  });
  return /*#__PURE__*/_jsx("div", {
    children: "CalculateResults"
  });
}
;// CONCATENATED MODULE: ./components/results/line-items.js








function LineItems({
  data,
  itemTotal
}) {
  const {
    isOpen,
    onToggle
  } = (0,use_disclosure/* useDisclosure */.q)();
  const {
    description,
    frontEndTitle,
    frequency,
    optional
  } = data; // console.log(showArray(data))

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
      direction: {
        base: 'column',
        md: 'row'
      },
      alignItems: {
        base: 'flex-start',
        md: 'center'
      },
      mb: "6",
      pb: {
        base: "3",
        md: "0"
      },
      justifyContent: "space-between",
      className: "printNoMargins itemInnerWrapper",
      width: "100%",
      borderBottom: {
        base: "solid 1px #ccc",
        md: "none"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
        flexDir: {
          base: "column",
          lg: "row"
        },
        alignItems: {
          base: "start",
          lg: "center"
        },
        justifyContent: "start",
        width: "100%",
        position: "relative",
        mb: {
          base: "1",
          md: "0"
        },
        flexWrap: "wrap",
        _after: {
          md: {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: '#ccc',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            margin: 'auto',
            zIndex: '0'
          }
        },
        children: [/*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
          size: "md",
          as: "h3",
          background: "#F7F6F7",
          zIndex: "1",
          pr: {
            md: "24px"
          },
          suppressHydrationWarning: true,
          children: frontEndTitle
        }), optional && /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
          background: "#F7F6F7",
          zIndex: "1",
          pr: {
            md: "24px"
          },
          display: "block",
          textTransform: "uppercase",
          fontSize: "xx-small",
          color: "#565A5C",
          mt: {
            base: "2",
            lg: "0"
          },
          mb: "0",
          suppressHydrationWarning: true,
          children: "Optional Fee"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
        flexDir: "row",
        alignItems: "center",
        className: "printPriceWrapper",
        children: [/*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
          order: "3",
          ml: {
            base: "0",
            md: "24px"
          },
          textAlign: "right",
          children: /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
            fontSize: "md",
            fontWeight: "bold",
            mb: "0",
            className: "printPrice",
            order: "1",
            suppressHydrationWarning: true,
            children: /*#__PURE__*/jsx_runtime.jsx(Counter, {
              target: itemTotal,
              duration: 0
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
          minW: "78px",
          order: "3",
          textAlign: "right",
          ml: "24px",
          children: /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
            color: "#565A5C",
            fontSize: "xs",
            variant: "solid",
            className: "printBadge",
            order: "2",
            my: "0",
            suppressHydrationWarning: true,
            children: capitalize(frequency.replace(/([A-Z])/g, ' $1').trim())
          })
        }), /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
          minW: "52px",
          order: "3",
          textAlign: "right",
          ml: "24px",
          children: description && /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
            leftIcon: /*#__PURE__*/jsx_runtime.jsx(index_esm/* MdInfo */.I5p, {}),
            color: isOpen ? '#A82E26' : 'blue.600',
            variant: "link",
            onClick: onToggle,
            size: "xs",
            py: "12px",
            pr: "0",
            mr: "0",
            alignItems: "end",
            "aria-expanded": isOpen ? true : false,
            "aria-label": `${frontEndTitle} info`,
            children: isOpen ? 'Close' : 'Info'
          })
        })]
      })]
    }), description && /*#__PURE__*/jsx_runtime.jsx(collapse/* Collapse */.U, {
      in: isOpen,
      animateOpacity: true,
      children: /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
        px: "24px",
        pt: "20px",
        pb: "10px",
        bg: "#fff",
        border: "1px solid #A2A4A3",
        children: /*#__PURE__*/jsx_runtime.jsx(serializers_text/* Text */.x, {
          blocks: description
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/results/category.js








function Category({
  category,
  questions
}) {
  const {
    isOpen,
    onToggle
  } = (0,use_disclosure/* useDisclosure */.q)(); // suppressHydrationWarning

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(box/* Box */.xu, {
    mb: 10,
    p: "30px",
    backgroundColor: "#F7F6F7",
    className: "printNoMargins itemOuterWrapper",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
      direction: {
        base: "column",
        md: "row"
      },
      alignItems: {
        base: "flex-start",
        md: "center"
      },
      mb: 4,
      className: "printNoMargins",
      justifyContent: "space-between",
      borderBottom: {
        base: "solid 1px #ccc",
        md: "none"
      },
      pb: {
        base: '3',
        md: "0"
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
        size: "xl",
        fontWeight: "400",
        mb: {
          base: "1",
          md: "0"
        },
        as: "h3",
        suppressHydrationWarning: true,
        children: category.title
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
          fontSize: "2xl",
          mb: "0",
          suppressHydrationWarning: true,
          children: /*#__PURE__*/jsx_runtime.jsx(Counter, {
            target: category.total,
            duration: 2
          })
        }), /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
          minW: "52px",
          order: "3",
          textAlign: "right",
          ml: "24px",
          children: (category === null || category === void 0 ? void 0 : category.description) && /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
            leftIcon: /*#__PURE__*/jsx_runtime.jsx(index_esm/* MdInfo */.I5p, {}),
            color: isOpen ? '#A82E26' : 'blue.600',
            variant: "link",
            onClick: onToggle,
            fontSize: "xs",
            "aria-expanded": isOpen ? true : false,
            "aria-label": `${category.title} info`,
            children: isOpen ? 'Close' : 'Info'
          })
        })]
      })]
    }), (category === null || category === void 0 ? void 0 : category.description) && /*#__PURE__*/jsx_runtime.jsx(collapse/* Collapse */.U, {
      in: isOpen,
      animateOpacity: true,
      children: /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
        mb: "6",
        px: "24px",
        pt: "20px",
        pb: "10px",
        bg: "#fff",
        border: "1px solid #A2A4A3",
        children: /*#__PURE__*/jsx_runtime.jsx(serializers_text/* Text */.x, {
          blocks: category === null || category === void 0 ? void 0 : category.description
        })
      })
    }), ' ', category.lineItems.map(lineItem => {
      return /*#__PURE__*/jsx_runtime.jsx(LineItems, {
        data: lineItem,
        catID: category._id,
        catTitle: category.title,
        itemTotal: totalGenerator(lineItem === null || lineItem === void 0 ? void 0 : lineItem.itemValue[0], questions)
      }, lineItem._key);
    }).filter(val => showArray(val.props.data, questions) === true)]
  }, category._id);
} // category.lineItems &&
//         category.lineItems !== undefined &&
//         category.lineItems.length > 0 &&
//         category?.lineItems
// EXTERNAL MODULE: ./node_modules/react-to-print/lib/index.js
var lib = __webpack_require__(47116);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/link.js
var esm_link = __webpack_require__(49444);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/radio/dist/esm/radio-group.js + 1 modules
var radio_group = __webpack_require__(53002);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/form-control/dist/esm/form-label.js
var form_label = __webpack_require__(36618);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/stack.js + 3 modules
var stack = __webpack_require__(50051);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/radio/dist/esm/radio.js + 1 modules
var esm_radio = __webpack_require__(61279);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(89583);
;// CONCATENATED MODULE: ./components/results/index.js



function results_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function results_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { results_ownKeys(Object(source), true).forEach(function (key) { results_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { results_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function results_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function Results({
  categories,
  tuitionCalculator,
  dev
}) {
  const router = (0,next_router.useRouter)();
  const {
    actions,
    state
  } = (0,little_state_machine/* useStateMachine */.j_)({
    updateAction: hooks_updateAction/* default */.Z
  });
  const {
    questions,
    results,
    totalSemesters
  } = state.calculator;
  const mainRef = (0,react.useRef)();
  const componentRef = (0,react.useRef)();

  const updateTotalSemesters = val => {
    val = parseInt(val);
    actions.updateAction(results_objectSpread(results_objectSpread({}, state), {}, {
      calculator: results_objectSpread(results_objectSpread({}, state.calculator), {}, {
        totalSemesters: val
      }, state.calculator.results)
    }));
  };

  const filteredResults = categories === null || categories === void 0 ? void 0 : categories.map(val => {
    return results_objectSpread(results_objectSpread({}, val), {}, {
      lineItems: val.lineItems.map(item => {
        return results_objectSpread(results_objectSpread({}, item), {}, {
          total: totalGenerator(item === null || item === void 0 ? void 0 : item.itemValue[0], questions)
        });
      }).filter(val => showArray(val, questions) === true)
    });
  }).filter(val => val.lineItems.length > 0).map(val => {
    const catTotals = [];
    let catTotal = 0;
    val.lineItems.map(item => {
      // console.log(item.frequency)
      catTotals.push(item.frequency === 'perSemester' ? parseFloat(item.total) * totalSemesters : parseFloat(item.total));
      catTotals.length > 0 ? catTotal = catTotals.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : catTotal = catTotals[0];
    });
    return results_objectSpread(results_objectSpread({}, val), {}, {
      total: catTotal
    });
  });
  const grandTotals = [];
  let grandTotal = 0;
  filteredResults.map(item => {
    grandTotals.push(parseFloat(item.total));
    grandTotals.length > 0 ? grandTotal = grandTotals.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : grandTotal = grandTotals[0];
  });

  const StartOver = () => {
    // console.clear()
    actions.updateAction(results_objectSpread(results_objectSpread({}, state), {}, {
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
    mb: 10,
    className: "printNoMargins",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(box/* Box */.xu, {
      ref: componentRef,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(box/* Box */.xu, {
        mb: 10,
        className: "printNoMargins",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
          justifyContent: "space-between",
          alignItems: "baseline",
          className: "printNoMargins",
          backgroundColor: "yellow.500",
          p: "30px",
          flexDirection: {
            base: 'column',
            md: 'row'
          },
          children: [/*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
            size: "lg",
            as: "h1",
            mb: {
              base: '1',
              md: '0'
            },
            children: "Your total estimate"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(esm_text/* Text */.x, {
            fontSize: "2xl",
            mb: "0",
            fontWeight: "bold",
            color: "gray.800",
            className: "printPrice",
            suppressHydrationWarning: true,
            children: [/*#__PURE__*/jsx_runtime.jsx(Counter, {
              target: grandTotal,
              duration: 2
            }), ' ', /*#__PURE__*/jsx_runtime.jsx(esm_link/* Link */.r, {
              href: "#disclaimer",
              "aria-label": "View disclaimer",
              textDecoration: "none",
              children: "*"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(flex/* Flex */.k, {
          alignItems: "center",
          className: "printVisibilityHide",
          my: 10,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(radio_group/* RadioGroup */.E, {
            name: "totalSemestersView",
            onChange: updateTotalSemesters,
            value: totalSemesters.toString(),
            defaultChecked: totalSemesters.toString(),
            as: "fieldset",
            children: [/*#__PURE__*/jsx_runtime.jsx(form_label/* FormLabel */.l, {
              fontWeight: "bold",
              as: "legend",
              children: "Estimate costs for:"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(stack/* Stack */.Kq, {
              direction: "row",
              children: [/*#__PURE__*/jsx_runtime.jsx(esm_radio/* Radio */.Y, {
                value: "1",
                id: "one",
                colorScheme: "yellow",
                children: "One Semester"
              }), /*#__PURE__*/jsx_runtime.jsx(esm_radio/* Radio */.Y, {
                value: "2",
                id: "two",
                colorScheme: "yellow",
                children: "Two Semesters"
              })]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
        mb: 10,
        className: "printNoMargins",
        pt: 0,
        children: filteredResults.map(category => /*#__PURE__*/jsx_runtime.jsx(Category, {
          category: category,
          questions: questions
        }, category._id))
      })]
    }), (tuitionCalculator === null || tuitionCalculator === void 0 ? void 0 : tuitionCalculator.disclaimer) && /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
      mb: "8",
      id: "disclaimer",
      children: /*#__PURE__*/jsx_runtime.jsx(serializers_text/* Text */.x, {
        blocks: tuitionCalculator.disclaimer
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
      direction: {
        base: 'column',
        md: 'row'
      },
      alignItems: {
        base: 'flex-start',
        md: 'center'
      },
      justifyContent: {
        md: 'space-between'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
        direction: {
          base: 'column',
          md: 'row'
        },
        alignItems: {
          base: 'flex-start',
          md: 'center'
        },
        mb: {
          base: '6',
          md: '0'
        },
        children: [/*#__PURE__*/jsx_runtime.jsx((lib_default()), {
          trigger: () => {
            return /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
              leftIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaPrint */.rcQ, {}),
              variant: "solid",
              fontSize: "sm",
              colorScheme: "blue",
              mr: {
                base: '24px'
              },
              mb: {
                base: '6',
                md: '0'
              },
              children: "Print Results"
            });
          },
          content: () => componentRef.current
        }), questions && Object.keys(questions).length > 0 && dev && /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
          leftIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaPencilAlt */.KHI, {}),
          variant: "link",
          fontSize: "sm",
          colorScheme: "blue",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            href: `/dev/question/${Object.keys(questions)[0]}`,
            children: "Edit Answers"
          })
        }), questions && Object.keys(questions).length > 0 && !dev && /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
          leftIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaPencilAlt */.KHI, {}),
          variant: "link",
          fontSize: "sm",
          colorScheme: "blue",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            href: `/question/${Object.keys(questions)[0]}`,
            children: "Edit Answers"
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
        leftIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaCaretSquareLeft */.ipd, {}),
        variant: "link",
        fontSize: "sm",
        colorScheme: "blue",
        onClick: () => StartOver(),
        children: "Start Over"
      })]
    })]
  });
}

/***/ }),

/***/ 12954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ pageview; }
/* harmony export */ });
/* unused harmony export event */
// log the pageview with their URL
const pageview = url => {
  window.gtag('config', "G-CMFB1GB8W8", {
    page_path: url
  });
}; // log specific events happening.

const event = ({
  action,
  params
}) => {
  window.gtag('event', action, params);
};

/***/ }),

/***/ 68054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports isStringEmpty, GetUrlPathParams */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11163);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);



const GetUrlPathParams = () => {
  const {
    0: pathParams,
    1: setPathParams
  } = useState("");
  useEffect(() => {
    var _router$asPath, _router$pathname;

    setPathParams(router === null || router === void 0 ? void 0 : (_router$asPath = router.asPath) === null || _router$asPath === void 0 ? void 0 : _router$asPath.slice(router === null || router === void 0 ? void 0 : (_router$pathname = router.pathname) === null || _router$pathname === void 0 ? void 0 : _router$pathname.length));
  }, [router]);
  const router = useRouter();
  return pathParams;
};

const isStringEmpty = val => {
  if (val === undefined || val === null || val === '') {
    return true;
  } else {
    return false;
  }
};



/***/ })

};
;