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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _InstructData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InstructData */ \"./src/components/Explain-box/InstructData.tsx\");\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  text-align: center;\\n  margin-left: auto;\\n  margin-right: auto;\\n  width: 350px;\\n  height: auto;\\n  padding: 15px 0px 15px 0px;\\n  border: solid 3px #999999;\\n  border-radius: 40px; /* 枠を角丸にする */\\n\\n  font-size: 24px;\\n  font-family: \"游ゴシック\";\\n\\n  li {\\n    /* display: inline-block; */\\n    list-style: none;\\n    padding: 0px 0px 0px 0px;\\n  }\\n'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 80%;\\n  height: 300px;\\n\\n  margin-left: auto; /* 左の余白 */\\n  margin-right: auto; /* 右の余白 */\\n  margin-top: 10px; /* 上の余白 */\\n  margin-bottom: 5px; /* 下の余白 */\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nvar BoxDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = BoxDiv;\nvar CardDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = CardDiv;\nvar ExplainBox = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), 2), count = _useState[0], setCount = _useState[1];\n    //   setInterval(() => {\n    //     setCount((oldCount) => {\n    //       if (oldCount < 100) return oldCount + 1;\n    //       else oldCount = 0;\n    //       return 0;\n    //     });\n    //   }, 1000);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setCount(function(oldCount) {\n                if (oldCount < 3) return oldCount + 1;\n                return 0;\n            });\n        }, 1000);\n        return function() {\n            return clearInterval(interval);\n        };\n    }, [\n        _InstructData__WEBPACK_IMPORTED_MODULE_3__.InstructData[count]\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BoxDiv, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                children: \"プレイ方法\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardDiv, {\n                className: \"item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: _InstructData__WEBPACK_IMPORTED_MODULE_3__.InstructData[0].image\n                    }, void 0, false, {\n                        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: _InstructData__WEBPACK_IMPORTED_MODULE_3__.InstructData[count].instruction\n                    }, void 0, false, {\n                        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: count\n                    }, void 0, false, {\n                        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/frontend/src/components/Explain-box/explain-box.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(ExplainBox, \"/xL7qdScToREtqzbt5GZ1kHtYjQ=\");\n_c2 = ExplainBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExplainBox);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"BoxDiv\");\n$RefreshReg$(_c1, \"CardDiv\");\n$RefreshReg$(_c2, \"ExplainBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBsYWluLWJveC9leHBsYWluLWJveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNPO0FBRTlDLElBQU1JLFNBQVNGLDZEQUFVO0tBQW5CRTtBQW9CTixJQUFNRSxVQUFVSiw2REFBVTtNQUFwQkk7QUFVTixJQUFNQyxhQUFhOztJQUNqQixJQUEwQk4sWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQTVCTyxRQUFtQlAsY0FBWlEsV0FBWVI7SUFFMUIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQixpREFBaUQ7SUFDakQsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUVkRCxnREFBU0EsQ0FBQztRQUNSLElBQU1VLFdBQVdDLFlBQVk7WUFDM0JGLFNBQVMsU0FBQ0c7Z0JBQ1IsSUFBSUEsV0FBVyxHQUFHLE9BQU9BLFdBQVc7Z0JBQ3BDLE9BQU87WUFDVDtRQUNGLEdBQUc7UUFDSCxPQUFPO21CQUFNQyxjQUFjSDs7SUFDN0IsR0FBRztRQUFDUCx1REFBWSxDQUFDSyxNQUFNO0tBQUM7SUFFeEIscUJBQ0UsOERBQUNKOzswQkFDQyw4REFBQ1U7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ1I7Z0JBQVFTLFdBQVU7O2tDQUNqQiw4REFBQ0Q7a0NBQUlYLHVEQUFZLENBQUMsRUFBRSxDQUFDYSxLQUFLOzs7Ozs7a0NBQzFCLDhEQUFDRjtrQ0FBSVgsdURBQVksQ0FBQ0ssTUFBTSxDQUFDUyxXQUFXOzs7Ozs7a0NBQ3BDLDhEQUFDSDtrQ0FBSU47Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBL0JNRDtNQUFBQTtBQWlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBsYWluLWJveC9leHBsYWluLWJveC50c3g/NzdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSW5zdHJ1Y3REYXRhIH0gZnJvbSBcIi4vSW5zdHJ1Y3REYXRhXCI7XG5cbmNvbnN0IEJveERpdiA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICBib3JkZXI6IHNvbGlkIDNweCAjOTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA0MHB4OyAvKiDmnqDjgpLop5LkuLjjgavjgZnjgosgKi9cblxuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIua4uOOCtOOCt+ODg+OCr1wiO1xuXG4gIGxpIHtcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IENhcmREaXYgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyAvKiDlt6bjga7kvZnnmb0gKi9cbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAvKiDlj7Pjga7kvZnnmb0gKi9cbiAgbWFyZ2luLXRvcDogMTBweDsgLyog5LiK44Gu5L2Z55m9ICovXG4gIG1hcmdpbi1ib3R0b206IDVweDsgLyog5LiL44Gu5L2Z55m9ICovXG5gO1xuXG5jb25zdCBFeHBsYWluQm94ID0gKCkgPT4ge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAvLyAgICAgc2V0Q291bnQoKG9sZENvdW50KSA9PiB7XG4gIC8vICAgICAgIGlmIChvbGRDb3VudCA8IDEwMCkgcmV0dXJuIG9sZENvdW50ICsgMTtcbiAgLy8gICAgICAgZWxzZSBvbGRDb3VudCA9IDA7XG4gIC8vICAgICAgIHJldHVybiAwO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSwgMTAwMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldENvdW50KChvbGRDb3VudCkgPT4ge1xuICAgICAgICBpZiAob2xkQ291bnQgPCAzKSByZXR1cm4gb2xkQ291bnQgKyAxO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW0luc3RydWN0RGF0YVtjb3VudF1dKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hEaXY+XG4gICAgICA8bGk+44OX44Os44Kk5pa55rOVPC9saT5cbiAgICAgIDxDYXJkRGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGxpPntJbnN0cnVjdERhdGFbMF0uaW1hZ2V9PC9saT5cbiAgICAgICAgPGxpPntJbnN0cnVjdERhdGFbY291bnRdLmluc3RydWN0aW9ufTwvbGk+XG4gICAgICAgIDxsaT57Y291bnR9PC9saT5cbiAgICAgIDwvQ2FyZERpdj5cbiAgICA8L0JveERpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhaW5Cb3g7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJJbnN0cnVjdERhdGEiLCJCb3hEaXYiLCJkaXYiLCJDYXJkRGl2IiwiRXhwbGFpbkJveCIsImNvdW50Iiwic2V0Q291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwib2xkQ291bnQiLCJjbGVhckludGVydmFsIiwibGkiLCJjbGFzc05hbWUiLCJpbWFnZSIsImluc3RydWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Explain-box/explain-box.tsx\n"));

/***/ })

});