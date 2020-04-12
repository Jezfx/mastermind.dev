webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/home/home.styles.js":
/*!****************************************!*\
  !*** ./containers/home/home.styles.js ***!
  \****************************************/
/*! exports provided: Container, Main, SubHeader, Intro, Aside, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubHeader", function() { return SubHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return Aside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 300px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex-grow: 1;\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 50px;\n  font-size: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 0;\n  font-style: italic;\n  font-weight: bold;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 550px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main(_templateObject2());
var SubHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject4());
var Aside = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside(_templateObject5());
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject6());

/***/ }),

/***/ "./containers/home/index.js":
/*!**********************************!*\
  !*** ./containers/home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/layout/ */ "./components/layout/index.js");
/* harmony import */ var _components_button___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/button/ */ "./components/button/index.js");
/* harmony import */ var _components_typography___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/typography/ */ "./components/typography/index.js");
/* harmony import */ var _home_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.styles */ "./containers/home/home.styles.js");
var _this = undefined,
    _jsxFileName = "/Users/jezfx/Code/056 - mastermind/mastermind/containers/home/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_layout___WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_home_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_home_styles__WEBPACK_IMPORTED_MODULE_4__["Main"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_home_styles__WEBPACK_IMPORTED_MODULE_4__["SubHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Virtual mastermind groups for developers."), __jsx(_home_styles__WEBPACK_IMPORTED_MODULE_4__["Intro"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Meet on a regular basis with other driven developers to share ideas, learn and teach."), __jsx(_components_typography___WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Goal"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "As a developer, it's hard to stay on top of how quick the industry moves and keeping up with news, best practices and ."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "The goal of these masterminds is for small groups to work together to share essential knowledge to build each other up."), __jsx(_components_typography___WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "How it works"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Tell us about your background, goals and interests and we'll put you in a group (max 5) of similar skills sets and levels to meet on a regular basis."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Once a month you'll get together for your mastermind to share something interesting you've learnt or discovered that month. A new person each month will lead the group to manage time and structure.")), __jsx(_home_styles__WEBPACK_IMPORTED_MODULE_4__["Aside"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_home_styles__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/conf-call.png",
    alt: "my image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(_components_button___WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Join the waiting list")))));
});

/***/ })

})
//# sourceMappingURL=index.js.88209e7394c802c61431.hot-update.js.map