"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test/app",{

/***/ "./src/components/Explain-box/explain-box.tsx":
/*!****************************************************!*\
  !*** ./src/components/Explain-box/explain-box.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _InstructData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InstructData */ \"./src/components/Explain-box/InstructData.tsx\");\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  text-align: center;\\n  margin-left: auto;\\n  margin-right: auto;\\n  width: 350px;\\n  height: auto;\\n  padding: 15px 0px 15px 0px;\\n  border: solid 3px #999999;\\n  border-radius: 40px; /* 枠を角丸にする */\\n\\n  font-size: 24px;\\n  font-family: \"游ゴシック\";\\n\\n  li {\\n    /* display: inline-block; */\\n    list-style: none;\\n    padding: 0px 0px 0px 0px;\\n  }\\n'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 80%;\\n  height: 300px;\\n\\n  margin-left: auto; /* 左の余白 */\\n  margin-right: auto; /* 右の余白 */\\n  margin-top: 10px; /* 上の余白 */\\n  margin-bottom: 5px; /* 下の余白 */\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nvar BoxDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = BoxDiv;\nvar CardDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = CardDiv;\nvar ExplainBox = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), 2), count = _useState[0], setCount = _useState[1];\n    setInterval(function() {\n        setCount(function(oldCount) {\n            if (oldCount < 2) return oldCount + 1;\n            return 0;\n        });\n    }, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BoxDiv, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                children: \"プレイ方法\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardDiv, {\n                className: \"item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: _InstructData__WEBPACK_IMPORTED_MODULE_3__.InstructData[0].image\n                    }, void 0, false, {\n                        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: _InstructData__WEBPACK_IMPORTED_MODULE_3__.InstructData[count].instruction\n                    }, void 0, false, {\n                        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: count\n                    }, void 0, false, {\n                        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(ExplainBox, \"oDgYfYHkD9Wkv4hrAPCkI/ev3YU=\");\n_c2 = ExplainBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExplainBox);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"BoxDiv\");\n$RefreshReg$(_c1, \"CardDiv\");\n$RefreshReg$(_c2, \"ExplainBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBsYWluLWJveC9leHBsYWluLWJveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNPO0FBRTlDLElBQU1HLFNBQVNGLDZEQUFVO0tBQW5CRTtBQW9CTixJQUFNRSxVQUFVSiw2REFBVTtNQUFwQkk7QUFVTixJQUFNQyxhQUFhOztJQUNqQixJQUEwQk4sWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQTVCTyxRQUFtQlAsY0FBWlEsV0FBWVI7SUFFMUJTLFlBQVk7UUFDVkQsU0FBUyxTQUFDRTtZQUNSLElBQUlBLFdBQVcsR0FBRyxPQUFPQSxXQUFXO1lBQ3BDLE9BQU87UUFDVDtJQUNGLEdBQUc7SUFFSCxxQkFDRSw4REFBQ1A7OzBCQUNDLDhEQUFDUTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDTjtnQkFBUU8sV0FBVTs7a0NBQ2pCLDhEQUFDRDtrQ0FBSVQsdURBQVksQ0FBQyxFQUFFLENBQUNXLEtBQUs7Ozs7OztrQ0FDMUIsOERBQUNGO2tDQUFJVCx1REFBWSxDQUFDSyxNQUFNLENBQUNPLFdBQVc7Ozs7OztrQ0FDcEMsOERBQUNIO2tDQUFJSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7R0FwQk1EO01BQUFBO0FBc0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0V4cGxhaW4tYm94L2V4cGxhaW4tYm94LnRzeD83N2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJbnN0cnVjdERhdGEgfSBmcm9tIFwiLi9JbnN0cnVjdERhdGFcIjtcblxuY29uc3QgQm94RGl2ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XG4gIGJvcmRlcjogc29saWQgM3B4ICM5OTk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7IC8qIOaeoOOCkuinkuS4uOOBq+OBmeOCiyAqL1xuXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwi5ri444K044K344OD44KvXCI7XG5cbiAgbGkge1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgfVxuYDtcblxuY29uc3QgQ2FyZERpdiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMzAwcHg7XG5cbiAgbWFyZ2luLWxlZnQ6IGF1dG87IC8qIOW3puOBruS9meeZvSAqL1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87IC8qIOWPs+OBruS9meeZvSAqL1xuICBtYXJnaW4tdG9wOiAxMHB4OyAvKiDkuIrjga7kvZnnmb0gKi9cbiAgbWFyZ2luLWJvdHRvbTogNXB4OyAvKiDkuIvjga7kvZnnmb0gKi9cbmA7XG5cbmNvbnN0IEV4cGxhaW5Cb3ggPSAoKSA9PiB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNldENvdW50KChvbGRDb3VudCkgPT4ge1xuICAgICAgaWYgKG9sZENvdW50IDwgMikgcmV0dXJuIG9sZENvdW50ICsgMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9LCAxMDAwKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hEaXY+XG4gICAgICA8bGk+44OX44Os44Kk5pa55rOVPC9saT5cbiAgICAgIDxDYXJkRGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGxpPntJbnN0cnVjdERhdGFbMF0uaW1hZ2V9PC9saT5cbiAgICAgICAgPGxpPntJbnN0cnVjdERhdGFbY291bnRdLmluc3RydWN0aW9ufTwvbGk+XG4gICAgICAgIDxsaT57Y291bnR9PC9saT5cbiAgICAgIDwvQ2FyZERpdj5cbiAgICA8L0JveERpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhaW5Cb3g7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJJbnN0cnVjdERhdGEiLCJCb3hEaXYiLCJkaXYiLCJDYXJkRGl2IiwiRXhwbGFpbkJveCIsImNvdW50Iiwic2V0Q291bnQiLCJzZXRJbnRlcnZhbCIsIm9sZENvdW50IiwibGkiLCJjbGFzc05hbWUiLCJpbWFnZSIsImluc3RydWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Explain-box/explain-box.tsx\n"));

/***/ })

});