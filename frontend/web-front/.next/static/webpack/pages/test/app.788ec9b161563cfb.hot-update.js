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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  /* height: 100%; */\\n  /* width: auto; */\\n  padding: 10px 0px 0px 10px;\\n  border: solid 3px #999999;\\n\\n  li {\\n    /* display: inline-block; */\\n    list-style: none;\\n    padding: 0px 0px 0px 0px;\\n  }\\n  .container {\\n    width: 150px;\\n    margin: 5px;\\n    border: solid 1px #999999;\\n  }\\n\\n  .item {\\n    width: 100px;\\n    margin: 5px;\\n    border: solid 1px #999999;\\n\\n    margin-left: auto; /* 左の余白 */\\n    margin-right: auto; /* 右の余白 */\\n    margin-top: 5px; /* 上の余白 */\\n    margin-bottom: 5px; /* 下の余白 */\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar BoxDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = BoxDiv;\nvar ExplainBox = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BoxDiv, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                children: \"プレイ方法\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"item\",\n                children: \"アイテム\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = ExplainBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExplainBox);\nvar _c, _c1;\n$RefreshReg$(_c, \"BoxDiv\");\n$RefreshReg$(_c1, \"ExplainBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBsYWluLWJveC9leHBsYWluLWJveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLElBQU1FLFNBQVNELDZEQUFVO0tBQW5CQztBQTZCTixJQUFNRSxhQUFhO0lBQ2pCLHFCQUNFLDhEQUFDRjs7MEJBQ0MsOERBQUNHOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGO2dCQUFJRyxXQUFVOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHNUI7TUFQTUY7QUFTTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBsYWluLWJveC9leHBsYWluLWJveC50c3g/NzdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBCb3hEaXYgPSBzdHlsZWQuZGl2YFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIC8qIHdpZHRoOiBhdXRvOyAqL1xuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzk5OTk5OTtcblxuICBsaSB7XG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjOTk5OTk5O1xuICB9XG5cbiAgLml0ZW0ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjOTk5OTk5O1xuXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IC8qIOW3puOBruS9meeZvSAqL1xuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgLyog5Y+z44Gu5L2Z55m9ICovXG4gICAgbWFyZ2luLXRvcDogNXB4OyAvKiDkuIrjga7kvZnnmb0gKi9cbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIOS4i+OBruS9meeZvSAqL1xuICB9XG5gO1xuXG5jb25zdCBFeHBsYWluQm94ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3hEaXY+XG4gICAgICA8bGk+44OX44Os44Kk5pa55rOVPC9saT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPuOCouOCpOODhuODoDwvZGl2PlxuICAgIDwvQm94RGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbGFpbkJveDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJveERpdiIsImRpdiIsIkV4cGxhaW5Cb3giLCJsaSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Explain-box/explain-box.tsx\n"));

/***/ })

});