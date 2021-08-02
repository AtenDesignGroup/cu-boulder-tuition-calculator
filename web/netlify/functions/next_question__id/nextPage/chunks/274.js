exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 93570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": function() { return /* binding */ Calculator; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(35063);
// EXTERNAL MODULE: ./node_modules/little-state-machine/dist/little-state-machine.js
var little_state_machine = __webpack_require__(11240);
// EXTERNAL MODULE: ./hooks/updateAction.js
var updateAction = __webpack_require__(69166);
// EXTERNAL MODULE: ./utils/helpers.js
var helpers = __webpack_require__(68054);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.js + 149 modules
var motion = __webpack_require__(84090);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(42283);
// EXTERNAL MODULE: ./components/serializers/text.js + 2 modules
var serializers_text = __webpack_require__(81725);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/form-control/dist/esm/form-control.js
var form_control = __webpack_require__(26729);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/form-control/dist/esm/form-label.js
var form_label = __webpack_require__(36618);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/heading.js
var heading = __webpack_require__(336);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/box.js
var box = __webpack_require__(48017);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/select/dist/esm/select.js + 1 modules
var esm_select = __webpack_require__(27508);
;// CONCATENATED MODULE: ./components/calculator/options.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Options({
  question,
  title,
  description
}) {
  var _question$optionSets, _state$calculator2, _state$calculator2$qu;

  const {
    register,
    handleSubmit
  } = (0,index_esm/* useForm */.cI)();
  const {
    actions,
    state
  } = (0,little_state_machine/* useStateMachine */.j_)({
    updateAction: updateAction/* default */.Z
  });
  const {
    currentQuestion
  } = state.calculator;
  const optionSetsLength = question === null || question === void 0 ? void 0 : (_question$optionSets = question.optionSets) === null || _question$optionSets === void 0 ? void 0 : _question$optionSets.length;
  const mainRef = (0,react.useRef)();
  (0,react.useEffect)(() => {
    setTimeout(() => {
      mainRef.current.focus();
    }, 1);
  }, []); // Using the question's logic to show or hide

  const questionLogic = q => {
    var _q$optionLogics;

    let showQuestion = false;

    if ((q === null || q === void 0 ? void 0 : q.optionLogics) === undefined || (q === null || q === void 0 ? void 0 : (_q$optionLogics = q.optionLogics) === null || _q$optionLogics === void 0 ? void 0 : _q$optionLogics.length) === 0) {
      showQuestion = true;
    } else {
      var _q$optionLogics2;

      showQuestion = (q === null || q === void 0 ? void 0 : q.optionLogics) && (q === null || q === void 0 ? void 0 : (_q$optionLogics2 = q.optionLogics) === null || _q$optionLogics2 === void 0 ? void 0 : _q$optionLogics2.map(logic => {
        var _state$calculator, _state$calculator$que;

        return (state === null || state === void 0 ? void 0 : (_state$calculator = state.calculator) === null || _state$calculator === void 0 ? void 0 : (_state$calculator$que = _state$calculator.questions[logic.logicSourceQuestion._ref]) === null || _state$calculator$que === void 0 ? void 0 : _state$calculator$que.answer) === logic.logicSourceValue;
      }));
    }

    let result = Array.isArray(showQuestion) ? !showQuestion.some(element => element === false) : showQuestion;
    return result;
  }; // Update State when a Select value has been updated


  const selectUpdate = (val, question) => {
    actions.updateAction(_objectSpread(_objectSpread({}, state), {}, {
      calculator: _objectSpread(_objectSpread({}, state.calculator), {}, {
        questions: _objectSpread(_objectSpread({}, state.calculator.questions), {}, {
          [question._id]: {
            title: question.title,
            answer: val ? val : null
          }
        })
      })
    }));
  };

  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: optionSetsLength === 1 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(form_control/* FormControl */.NI, {
      id: question === null || question === void 0 ? void 0 : question.optionSets[0]._key,
      mb: "6",
      children: [/*#__PURE__*/jsx_runtime.jsx(form_label/* FormLabel */.l, {
        children: /*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
          mb: "6",
          as: "h1",
          ref: mainRef,
          tabIndex: "-1",
          children: title
        })
      }), description && /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
        mb: "8" // tabIndex="1"
        ,
        children: /*#__PURE__*/jsx_runtime.jsx(serializers_text/* Text */.x, {
          blocks: description
        })
      }), /*#__PURE__*/jsx_runtime.jsx(esm_select/* Select */.Ph, _objectSpread(_objectSpread({}, register(`${question._id}`)), {}, {
        value: `${state === null || state === void 0 ? void 0 : (_state$calculator2 = state.calculator) === null || _state$calculator2 === void 0 ? void 0 : (_state$calculator2$qu = _state$calculator2.questions[question === null || question === void 0 ? void 0 : question._id]) === null || _state$calculator2$qu === void 0 ? void 0 : _state$calculator2$qu.answer}`,
        placeholder: "Make a selection",
        onChange: e => selectUpdate(e.currentTarget.value, question) // tabIndex="2"
        //rootProps={{}}
        ,
        borderColor: "#A2A4A3",
        borderRadius: "none",
        children: question === null || question === void 0 ? void 0 : question.optionSets[0].options.map(option => /*#__PURE__*/jsx_runtime.jsx("option", {
          value: option.value.current,
          children: option.title
        }, option._key))
      }))]
    }, question === null || question === void 0 ? void 0 : question.optionSets[0]._key) : question === null || question === void 0 ? void 0 : question.optionSets.map(optionSet => {
      var _state$calculator3, _state$calculator3$qu;

      return questionLogic(optionSet) && /*#__PURE__*/(0,jsx_runtime.jsxs)(form_control/* FormControl */.NI, {
        id: optionSet._key,
        mb: "6",
        children: [/*#__PURE__*/jsx_runtime.jsx(form_label/* FormLabel */.l, {
          children: /*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
            mb: "6",
            children: title
          })
        }), /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
          mb: "4",
          children: /*#__PURE__*/jsx_runtime.jsx(serializers_text/* Text */.x, {
            blocks: description
          })
        }), /*#__PURE__*/jsx_runtime.jsx(esm_select/* Select */.Ph, _objectSpread(_objectSpread({}, register(`${question._id}`)), {}, {
          value: `${state === null || state === void 0 ? void 0 : (_state$calculator3 = state.calculator) === null || _state$calculator3 === void 0 ? void 0 : (_state$calculator3$qu = _state$calculator3.questions[question === null || question === void 0 ? void 0 : question._id]) === null || _state$calculator3$qu === void 0 ? void 0 : _state$calculator3$qu.answer}`,
          placeholder: "Make a selection",
          onChange: e => selectUpdate(e.currentTarget.value, question),
          children: optionSet.options.map(option => /*#__PURE__*/jsx_runtime.jsx("option", {
            value: option.value.current,
            children: option.title
          }, option._key))
        }))]
      }, optionSet._key);
    })
  });
}
;// CONCATENATED MODULE: ./components/calculator/question.js



function Question(props) {
  const {
    question
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
    mb: "10",
    mt: "4",
    children: /*#__PURE__*/jsx_runtime.jsx(Options, {
      question: question,
      title: question.title,
      description: question.description
    })
  });
}
// EXTERNAL MODULE: ./node_modules/@chakra-ui/spinner/dist/esm/spinner.js
var spinner = __webpack_require__(45754);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/flex.js
var flex = __webpack_require__(94096);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/text.js
var esm_text = __webpack_require__(64115);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/progress/dist/esm/progress.js + 2 modules
var progress = __webpack_require__(78532);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/esm/button.js + 1 modules
var esm_button = __webpack_require__(56185);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(89583);
;// CONCATENATED MODULE: ./components/calculator/index.js



function calculator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function calculator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { calculator_ownKeys(Object(source), true).forEach(function (key) { calculator_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { calculator_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function calculator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import { AnimatePresence } from 'framer-motion'
// import { Text as BodyText } from '@/components/serializers/text'


 // import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'


function Calculator({
  question,
  questions,
  slug
}) {
  const router = (0,next_router.useRouter)(); // console.log({questions})

  const {
    actions,
    state
  } = (0,little_state_machine/* useStateMachine */.j_)({
    updateAction: updateAction/* default */.Z
  }); // const { currentQuestion } = state.calculator

  const currentQuestion = parseInt(slug);
  const {
    showResults,
    lastQuestion
  } = state.calculator;
  const questionLength = (questions === null || questions === void 0 ? void 0 : questions.length) - 1;
  const {
    0: currentQuestionID,
    1: setCurrentQuestionID
  } = (0,react.useState)(questions[currentQuestion]._id);
  const {
    0: seeResultsBtn,
    1: setSeeResultsBtn
  } = (0,react.useState)(false);
  const {
    0: atTheLastQuestion,
    1: setAtTheLastQuestion
  } = (0,react.useState)(false);
  const {
    0: questionAnswered,
    1: setQuestionAnswered
  } = (0,react.useState)(false); // Animation Variants (Framer Motion)

  const variants = {
    initial: {
      opacity: 0,
      // x: -50,
      display: 'none'
    },
    animate: {
      opacity: 1,
      // x: 0,
      display: 'block'
    },
    removed: {
      opacity: 0,
      // x: 50,
      display: 'none'
    },
    transition: {
      duration: 2
    }
  };
  const showQ = (0,react.useCallback)((q, optionLogicConditional, i) => {
    var _q$optionLogics;

    let showQuestion = [];
    let returnVal = '';

    if (i >= questionLength || showQuestion !== undefined && !showQuestion.length > 1) {
      return 'hide';
    }

    if ((q === null || q === void 0 ? void 0 : q.optionLogics) === undefined || (q === null || q === void 0 ? void 0 : (_q$optionLogics = q.optionLogics) === null || _q$optionLogics === void 0 ? void 0 : _q$optionLogics.length) === 0) {
      showQuestion.push('show');
    } else {
      var _q$optionLogics2;

      (q === null || q === void 0 ? void 0 : q.optionLogics) && (q === null || q === void 0 ? void 0 : (_q$optionLogics2 = q.optionLogics) === null || _q$optionLogics2 === void 0 ? void 0 : _q$optionLogics2.map(logic => {
        // String Logic
        if (logic._type === 'optionLogic') {
          var _state$calculator, _state$calculator$que;

          if ((state === null || state === void 0 ? void 0 : (_state$calculator = state.calculator) === null || _state$calculator === void 0 ? void 0 : (_state$calculator$que = _state$calculator.questions[logic.logicSourceQuestion._ref]) === null || _state$calculator$que === void 0 ? void 0 : _state$calculator$que.answer) === logic.logicSourceValue) {
            showQuestion.push('show');
          } else {
            showQuestion.push('hide');
          }
        } // Numeric Operational Logic


        if (logic._type === 'optionNumericLogic') {
          var _state$calculator2, _state$calculator2$qu, _logic$logicSourceQue;

          let questionVal = Number(state === null || state === void 0 ? void 0 : (_state$calculator2 = state.calculator) === null || _state$calculator2 === void 0 ? void 0 : (_state$calculator2$qu = _state$calculator2.questions[logic === null || logic === void 0 ? void 0 : (_logic$logicSourceQue = logic.logicSourceQuestion) === null || _logic$logicSourceQue === void 0 ? void 0 : _logic$logicSourceQue._ref]) === null || _state$calculator2$qu === void 0 ? void 0 : _state$calculator2$qu.answer);
          let logicVal = logic === null || logic === void 0 ? void 0 : logic.operatorValue;
          let mathOperation = logic === null || logic === void 0 ? void 0 : logic.mathOperation;
          showQuestion.push(operatorMagic(questionVal, mathOperation, logicVal));
        }
      })[0]);
    }

    if (optionLogicConditional === 'and') {
      showQuestion.includes('hide') ? returnVal = 'hide' : returnVal = 'true';
    }

    if (optionLogicConditional === 'or') {
      showQuestion.includes('show') ? returnVal = 'show' : returnVal = 'hide';
    }

    return returnVal;
  }, [questionLength, state]);
  (0,react.useEffect)(() => {
    setCurrentQuestionID(questions[currentQuestion]._id);
  }, [questions, currentQuestion]);
  (0,react.useEffect)(() => {
    var _state$calculator3, _state$calculator3$qu;

    // console.clear()
    // Check to see if the question has been answered
    setQuestionAnswered((0,helpers/* isStringEmpty */.W)(state === null || state === void 0 ? void 0 : (_state$calculator3 = state.calculator) === null || _state$calculator3 === void 0 ? void 0 : (_state$calculator3$qu = _state$calculator3.questions[currentQuestionID]) === null || _state$calculator3$qu === void 0 ? void 0 : _state$calculator3$qu.answer) ? false : true); // Question has been answered 👍🏻

    if (questionAnswered === true) {
      // console.log('👍🏻 question answered')
      let i = currentQuestion;
      let showQuestion = 'hide';
      let optionLogicConditional = 'or';

      while (showQuestion === 'hide') {
        var _questions$i;

        i += 1;

        if (i >= questionLength) {
          break;
        }

        optionLogicConditional = ((_questions$i = questions[i]) === null || _questions$i === void 0 ? void 0 : _questions$i.optionLogicConditional) || 'or';
        showQuestion = showQ(questions[i], optionLogicConditional, i);
      } // Logic to see if at the end of questions or not


      if (i === undefined || i >= questionLength) {
        // console.log('🔚 you have reached the end of our questions')
        i = currentQuestion;
        setAtTheLastQuestion(true);
      } else {
        setAtTheLastQuestion(false); // console.log('✅ another question')
      } // Question not answered 👎🏻

    } else {
      setAtTheLastQuestion(false); // console.log('👎🏻 question answered')
    } // console.log({lastQuestion})
    // console.log({questionAnswered})
    // console.log({atTheLastQuestion})

  }, [state.calculator.questions, currentQuestionID, questionAnswered, currentQuestion, questionLength, questions, showQ]);
  (0,react.useEffect)(() => {
    if (atTheLastQuestion) {
      actions.updateAction(calculator_objectSpread(calculator_objectSpread({}, state), {}, {
        lastQuestion: currentQuestion
      }));
    } // console.log({currentQuestion})
    // console.log({atTheLastQuestion})
    // console.log({lastQuestion})

  }, [actions, state, currentQuestion, atTheLastQuestion]);

  const operatorMagic = (questionVal, mathOperation, logicVal) => {
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
  }; // Button to advance the user to the next question, not shown or disabled on the last question


  const nextQuestion = () => {
    let i = currentQuestion;
    let showQuestion = 'hide';
    let optionLogicConditional = 'or';

    while (showQuestion === 'hide') {
      var _questions$i2;

      i += 1;

      if (i >= questionLength) {
        break;
      }

      optionLogicConditional = ((_questions$i2 = questions[i]) === null || _questions$i2 === void 0 ? void 0 : _questions$i2.optionLogicConditional) || 'or';
      showQuestion = showQ(questions[i], optionLogicConditional, i);
    }

    if (i === undefined || i >= questionLength) {
      // console.log('you have magically reached the end 🤔')
      i = currentQuestion;
      setAtTheLastQuestion(true);
      setSeeResultsBtn(true);
      actions.updateAction(calculator_objectSpread(calculator_objectSpread({}, state), {}, {
        calculator: calculator_objectSpread(calculator_objectSpread({}, state.calculator), {}, {
          showResults: true
        })
      }));
      router.push(`/results`);
    } else {
      actions.updateAction(calculator_objectSpread(calculator_objectSpread({}, state), {}, {
        calculator: calculator_objectSpread(calculator_objectSpread({}, state.calculator), {}, {
          currentQuestion: i === undefined || i > questionLength ? currentQuestion : i
        })
      }));
      router.push(`/question/${i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id}`);
    }
  }; // Button to advance the user to the previous question, not shown on the first question


  const prevQuestion = () => {
    let i = currentQuestion;
    let showQuestion = 'hide';
    let optionLogicConditional = 'or';

    while (showQuestion === 'hide') {
      var _questions$i3;

      i -= 1;

      if (i >= questionLength) {
        break;
      }

      optionLogicConditional = ((_questions$i3 = questions[i]) === null || _questions$i3 === void 0 ? void 0 : _questions$i3.optionLogicConditional) || 'or';
      showQuestion = showQ(questions[i], optionLogicConditional, i);
    }

    if (i === undefined || i >= questionLength) {
      i = currentQuestion;
      setSeeResultsBtn(true);
    }

    setAtTheLastQuestion(false);
    actions.updateAction(calculator_objectSpread(calculator_objectSpread({}, state), {}, {
      calculator: calculator_objectSpread(calculator_objectSpread({}, state.calculator), {}, {
        currentQuestion: i === undefined || i > questionLength ? currentQuestion : i
      })
    }));
    router.push(`/question/${i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id}`);
  }; // Button function to show the Results, only seen on the last question


  const seeResults = () => {
    setSeeResultsBtn(false);
    actions.updateAction(calculator_objectSpread(calculator_objectSpread({}, state), {}, {
      calculator: calculator_objectSpread(calculator_objectSpread({}, state.calculator), {}, {
        showResults: true
      })
    }));
    router.push(`/results`);
  }; // console.log({ question, questions, slug, currentQuestion })


  const StartOver = () => {
    // console.clear()
    actions.updateAction(calculator_objectSpread(calculator_objectSpread({}, state), {}, {
      calculator: {
        currentQuestion: 0,
        lastQuestion: null,
        showResults: false,
        questions: [],
        results: [],
        totalSemesters: 1
      }
    }));
    router.push(`/`);
  };

  if (!question) {
    return /*#__PURE__*/jsx_runtime.jsx(spinner/* Spinner */.$, {
      size: "md"
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx(flex/* Flex */.k, {
    flex: "1",
    flexDir: "column",
    width: "100%",
    children: /*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
      mt: "10",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(motion/* motion.div */.E.div, {
        variants: variants,
        exit: "removed",
        initial: "initial",
        animate: currentQuestion === slug ? 'animate' : 'initial',
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(box/* Box */.xu, {
          flex: "1",
          width: "100%",
          mb: "10",
          children: [/*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
            fontSize: "xs",
            color: "#565A5C",
            fontStyle: "italic",
            mb: "1",
            children: "My progress"
          }), /*#__PURE__*/jsx_runtime.jsx(progress/* Progress */.E, {
            colorScheme: "blue",
            size: "sm",
            value: (currentQuestion + 1) / questions.length * 100
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(Question, {
          question: question,
          index: slug,
          questionLength: questionLength,
          questions: questions
        }, question._id), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
          direction: {
            base: "column",
            md: "row"
          },
          alignItems: {
            base: "flex-start",
            md: "center"
          },
          children: [currentQuestion > 0 && /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
            onClick: () => prevQuestion(),
            leftIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaArrowAltCircleLeft */.O18, {}),
            variant: "solid",
            shadow: "md",
            background: "#565A5C",
            color: "#fff",
            _hover: {
              background: '#565A5C'
            },
            _active: {
              background: '#565A5C'
            },
            _disabled: {
              background: '#A2A4A3',
              shadow: 'none',
              cursor: 'not-allowed'
            },
            mr: {
              base: "0",
              md: "24px"
            },
            mb: {
              base: "24px",
              md: "0"
            },
            children: "Previous Question"
          }), questionLength > currentQuestion && /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
            onClick: () => nextQuestion(),
            isDisabled: questionAnswered ? false : true,
            rightIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaArrowAltCircleRight */.Rdr, {}),
            variant: "solid",
            shadow: "md",
            background: "blue.500",
            color: "#fff",
            _hover: {
              background: 'blue.600'
            },
            _active: {
              background: 'blue.500'
            },
            _disabled: {
              background: '#A2A4A3',
              shadow: 'none',
              cursor: 'not-allowed'
            } //tabIndex="4"
            ,
            mr: "24px",
            children: atTheLastQuestion ? 'See Results' : 'Next Question'
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
          mt: "12",
          alignItems: "center",
          suppressHydrationWarning: true,
          children: [/*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
            leftIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaCaretSquareLeft */.ipd, {}),
            variant: "link",
            fontSize: "sm",
            colorScheme: "blue",
            mr: "24px",
            onClick: () => StartOver(),
            children: "Start Over"
          }), showResults && !atTheLastQuestion && /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
            rightIcon: /*#__PURE__*/jsx_runtime.jsx(fa_index_esm/* FaCaretSquareRight */.qSj, {}),
            variant: "link",
            fontSize: "sm",
            colorScheme: "blue",
            children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
              href: "/results",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                children: "Back to Results"
              })
            })
          })]
        })]
      }, slug)
    })
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ isStringEmpty; }
/* harmony export */ });
/* unused harmony export GetUrlPathParams */
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