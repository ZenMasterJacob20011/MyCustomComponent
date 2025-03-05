/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rating/Rating.form.js":
/*!***********************************!*\
  !*** ./src/rating/Rating.form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ "@formio/js");
/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editForm_Rating_edit_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editForm/Rating.edit.display.js */ "./src/rating/editForm/Rating.edit.display.js");


const baseEditForm = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.baseEditForm
;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(...extend){
    return baseEditForm([
        {
            key: 'data',
            ignore: true,
        },
        {
            key: 'display',
            components: _editForm_Rating_edit_display_js__WEBPACK_IMPORTED_MODULE_1__["default"]
        }
    ], ... extend)
}


/***/ }),

/***/ "./src/rating/Rating.js":
/*!******************************!*\
  !*** ./src/rating/Rating.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rating)
/* harmony export */ });
/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ "@formio/js");
/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Rating_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating.form.js */ "./src/rating/Rating.form.js");



const Field = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.components.field;

class Rating extends Field {
  static editForm = _Rating_form_js__WEBPACK_IMPORTED_MODULE_1__["default"]

  static schema(...extend) {
    return Field.schema({
      type: 'rating',
      label: 'rating',
      key: 'rating',
      icon: 'bi bi-star',
      iconSize: '2rem',
      color: 'blue',
      numberOfIcons: 5,
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Rating',
      icon: 'star',
      group: 'basic',
      documentation: '/userguide/#rating',
      weight: 0,
      schema: Rating.schema()
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
  }

  render() {
    return super.render(this.renderTemplate('rating', {
      numberOfIcons: this.component.numberOfIcons
    }))
  }


  attachIcon(icons, index) {
    const icon = icons.item(index);
    icon.addEventListener('click', () => {
      for(const icon of icons){
        if(icon.className.indexOf('-fill') !== -1) {
          icon.className = icon.className.slice(0, icon.className.indexOf('-fill'));
        }
      }
      for (let i = 0; i <= index; i++) {
        icons[i].className = icon.className + '-fill';
      }
      this.updateValue(`${index+1}/${this.component.numberOfIcons}`);
    })
  }

  attachIcons() {
    const icons = this.refs.icon;
    for (let i = 0; i < icons.length; i++) {
      this.attachIcon(icons, i);
    }
  }

  attach(element) {
    this.loadRefs(element, {
      rating: 'single',
      icon: 'multiple'
    });
    this.attachIcons();
    return super.attach(element);
  }

  get defaultSchema() {
    return Rating.schema();
  }
}


/***/ }),

/***/ "./src/rating/editForm/Rating.edit.display.js":
/*!****************************************************!*\
  !*** ./src/rating/editForm/Rating.edit.display.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        type: 'number',
        key: 'numberOfIcons',
        label: 'Number of Icons',
        input: 'true',
        tooltip: "The number of icons displayed in the form"
    },
    {
        type: 'textfield',
        key: 'icon',
        label: 'Icon',
        input: 'true',
        tooltip: 'The bootstrap icon class that will go in the <i> tag'
    },
    {
        type: 'textfield',
        key: 'color',
        label: 'Color',
        input: 'true',
        tooltip: 'The color of the icons'
    },
    {
        type: 'textfield',
        key: 'iconSize',
        label: 'Icon Size',
        tooltip: 'The size of the icon'
    },
    {
        key: 'placeholder',
        ignore: true
    }
]);


/***/ }),

/***/ "./src/templates/form.js":
/*!*******************************!*\
  !*** ./src/templates/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ctx) {
  return `
    <div ref="rating">
      ${(function (){
        let icons = '';
        for (let i = 0; i < ctx.numberOfIcons; i++) {
          icons += `<i style="color: ${ctx.component.color}; font-size: ${ctx.component.iconSize}" class="${ctx.component.icon}" ref="icon"></i>`;
        }
        return icons;
      })()}
    </div>
  `
}


/***/ }),

/***/ "@formio/js":
/*!*************************!*\
  !*** external "Formio" ***!
  \*************************/
/***/ ((module) => {

module.exports = Formio;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ "@formio/js");
/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rating_Rating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating/Rating.js */ "./src/rating/Rating.js");
/* harmony import */ var _templates_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/form */ "./src/templates/form.js");




_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.use(
  {
    components: {
      rating: _rating_Rating_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    templates: {
      bootstrap: {
        rating: {
          form: _templates_form__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      }
    }
  }
);

// Formio.createForm(document.getElementById('formio'), {
//   components: [
//     {
//       "label": "rating",
//       "tableView": false,
//       "key": "rating",
//       "type": "rating",
//       "input": true
//     }
//   ]
// });

// Formio.builder(document.getElementById('builder'), {}, {
// })

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2xDO0FBQ0EscUJBQXFCLDhDQUFNO0FBQzNCLENBQWtFO0FBQ2xFLDZCQUFlLG9DQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0Isd0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQ0s7QUFDdkM7QUFDQSxjQUFjLDhDQUFNO0FBQ3BCO0FBQ2U7QUFDZixvQkFBb0IsdURBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBLDBCQUEwQixRQUFRLEdBQUcsNkJBQTZCO0FBQ2xFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaENELDZCQUFlLG9DQUFVO0FBQ3pCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DLHVDQUF1QyxzQkFBc0IsYUFBYSx1QkFBdUIsV0FBVyxtQkFBbUI7QUFDL0g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ087QUFDTTtBQUM5QztBQUNBLDhDQUFNO0FBQ047QUFDQTtBQUNBLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0Esd0RBQXdEO0FBQ3hELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXRpbmdjb21wb25lbnQvLi9zcmMvcmF0aW5nL1JhdGluZy5mb3JtLmpzIiwid2VicGFjazovL3JhdGluZ2NvbXBvbmVudC8uL3NyYy9yYXRpbmcvUmF0aW5nLmpzIiwid2VicGFjazovL3JhdGluZ2NvbXBvbmVudC8uL3NyYy9yYXRpbmcvZWRpdEZvcm0vUmF0aW5nLmVkaXQuZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9yYXRpbmdjb21wb25lbnQvLi9zcmMvdGVtcGxhdGVzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmF0aW5nY29tcG9uZW50L2V4dGVybmFsIHZhciBcIkZvcm1pb1wiIiwid2VicGFjazovL3JhdGluZ2NvbXBvbmVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yYXRpbmdjb21wb25lbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmF0aW5nY29tcG9uZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yYXRpbmdjb21wb25lbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yYXRpbmdjb21wb25lbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yYXRpbmdjb21wb25lbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtaW99IGZyb20gXCJAZm9ybWlvL2pzXCI7XHJcblxyXG5jb25zdCBiYXNlRWRpdEZvcm0gPSBGb3JtaW8uQ29tcG9uZW50cy5iYXNlRWRpdEZvcm1cclxuaW1wb3J0IFJhdGluZ0VkaXREaXNwbGF5IGZyb20gXCIuL2VkaXRGb3JtL1JhdGluZy5lZGl0LmRpc3BsYXkuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKC4uLmV4dGVuZCl7XHJcbiAgICByZXR1cm4gYmFzZUVkaXRGb3JtKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ2RhdGEnLFxyXG4gICAgICAgICAgICBpZ25vcmU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ2Rpc3BsYXknLFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBSYXRpbmdFZGl0RGlzcGxheVxyXG4gICAgICAgIH1cclxuICAgIF0sIC4uLiBleHRlbmQpXHJcbn1cclxuIiwiaW1wb3J0IHtGb3JtaW99IGZyb20gXCJAZm9ybWlvL2pzXCI7XHJcbmltcG9ydCBlZGl0Rm9ybSBmcm9tICcuL1JhdGluZy5mb3JtLmpzJ1xyXG5cclxuY29uc3QgRmllbGQgPSBGb3JtaW8uQ29tcG9uZW50cy5jb21wb25lbnRzLmZpZWxkO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0aW5nIGV4dGVuZHMgRmllbGQge1xyXG4gIHN0YXRpYyBlZGl0Rm9ybSA9IGVkaXRGb3JtXHJcblxyXG4gIHN0YXRpYyBzY2hlbWEoLi4uZXh0ZW5kKSB7XHJcbiAgICByZXR1cm4gRmllbGQuc2NoZW1hKHtcclxuICAgICAgdHlwZTogJ3JhdGluZycsXHJcbiAgICAgIGxhYmVsOiAncmF0aW5nJyxcclxuICAgICAga2V5OiAncmF0aW5nJyxcclxuICAgICAgaWNvbjogJ2JpIGJpLXN0YXInLFxyXG4gICAgICBpY29uU2l6ZTogJzJyZW0nLFxyXG4gICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICBudW1iZXJPZkljb25zOiA1LFxyXG4gICAgfSwgLi4uZXh0ZW5kKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgYnVpbGRlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ1JhdGluZycsXHJcbiAgICAgIGljb246ICdzdGFyJyxcclxuICAgICAgZ3JvdXA6ICdiYXNpYycsXHJcbiAgICAgIGRvY3VtZW50YXRpb246ICcvdXNlcmd1aWRlLyNyYXRpbmcnLFxyXG4gICAgICB3ZWlnaHQ6IDAsXHJcbiAgICAgIHNjaGVtYTogUmF0aW5nLnNjaGVtYSgpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY29tcG9uZW50LCBvcHRpb25zLCBkYXRhKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnQsIG9wdGlvbnMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnJlbmRlcih0aGlzLnJlbmRlclRlbXBsYXRlKCdyYXRpbmcnLCB7XHJcbiAgICAgIG51bWJlck9mSWNvbnM6IHRoaXMuY29tcG9uZW50Lm51bWJlck9mSWNvbnNcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcblxyXG4gIGF0dGFjaEljb24oaWNvbnMsIGluZGV4KSB7XHJcbiAgICBjb25zdCBpY29uID0gaWNvbnMuaXRlbShpbmRleCk7XHJcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBmb3IoY29uc3QgaWNvbiBvZiBpY29ucyl7XHJcbiAgICAgICAgaWYoaWNvbi5jbGFzc05hbWUuaW5kZXhPZignLWZpbGwnKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gaWNvbi5jbGFzc05hbWUuc2xpY2UoMCwgaWNvbi5jbGFzc05hbWUuaW5kZXhPZignLWZpbGwnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcclxuICAgICAgICBpY29uc1tpXS5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZSArICctZmlsbCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZShgJHtpbmRleCsxfS8ke3RoaXMuY29tcG9uZW50Lm51bWJlck9mSWNvbnN9YCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXR0YWNoSWNvbnMoKSB7XHJcbiAgICBjb25zdCBpY29ucyA9IHRoaXMucmVmcy5pY29uO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmF0dGFjaEljb24oaWNvbnMsIGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXR0YWNoKGVsZW1lbnQpIHtcclxuICAgIHRoaXMubG9hZFJlZnMoZWxlbWVudCwge1xyXG4gICAgICByYXRpbmc6ICdzaW5nbGUnLFxyXG4gICAgICBpY29uOiAnbXVsdGlwbGUnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXR0YWNoSWNvbnMoKTtcclxuICAgIHJldHVybiBzdXBlci5hdHRhY2goZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdFNjaGVtYSgpIHtcclxuICAgIHJldHVybiBSYXRpbmcuc2NoZW1hKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICBrZXk6ICdudW1iZXJPZkljb25zJyxcclxuICAgICAgICBsYWJlbDogJ051bWJlciBvZiBJY29ucycsXHJcbiAgICAgICAgaW5wdXQ6ICd0cnVlJyxcclxuICAgICAgICB0b29sdGlwOiBcIlRoZSBudW1iZXIgb2YgaWNvbnMgZGlzcGxheWVkIGluIHRoZSBmb3JtXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAga2V5OiAnaWNvbicsXHJcbiAgICAgICAgbGFiZWw6ICdJY29uJyxcclxuICAgICAgICBpbnB1dDogJ3RydWUnLFxyXG4gICAgICAgIHRvb2x0aXA6ICdUaGUgYm9vdHN0cmFwIGljb24gY2xhc3MgdGhhdCB3aWxsIGdvIGluIHRoZSA8aT4gdGFnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcclxuICAgICAgICBrZXk6ICdjb2xvcicsXHJcbiAgICAgICAgbGFiZWw6ICdDb2xvcicsXHJcbiAgICAgICAgaW5wdXQ6ICd0cnVlJyxcclxuICAgICAgICB0b29sdGlwOiAnVGhlIGNvbG9yIG9mIHRoZSBpY29ucydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAga2V5OiAnaWNvblNpemUnLFxyXG4gICAgICAgIGxhYmVsOiAnSWNvbiBTaXplJyxcclxuICAgICAgICB0b29sdGlwOiAnVGhlIHNpemUgb2YgdGhlIGljb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgICBpZ25vcmU6IHRydWVcclxuICAgIH1cclxuXVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDxkaXYgcmVmPVwicmF0aW5nXCI+XHJcbiAgICAgICR7KGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGxldCBpY29ucyA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3R4Lm51bWJlck9mSWNvbnM7IGkrKykge1xyXG4gICAgICAgICAgaWNvbnMgKz0gYDxpIHN0eWxlPVwiY29sb3I6ICR7Y3R4LmNvbXBvbmVudC5jb2xvcn07IGZvbnQtc2l6ZTogJHtjdHguY29tcG9uZW50Lmljb25TaXplfVwiIGNsYXNzPVwiJHtjdHguY29tcG9uZW50Lmljb259XCIgcmVmPVwiaWNvblwiPjwvaT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaWNvbnM7XHJcbiAgICAgIH0pKCl9XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBGb3JtaW87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Rm9ybWlvfSBmcm9tICdAZm9ybWlvL2pzJ1xyXG5pbXBvcnQgcmF0aW5nIGZyb20gXCIuL3JhdGluZy9SYXRpbmcuanNcIjtcclxuaW1wb3J0IHJhdGluZ1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL2Zvcm0nO1xyXG5cclxuRm9ybWlvLnVzZShcclxuICB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHJhdGluZ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlczoge1xyXG4gICAgICBib290c3RyYXA6IHtcclxuICAgICAgICByYXRpbmc6IHtcclxuICAgICAgICAgIGZvcm06IHJhdGluZ1RlbXBsYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuLy8gRm9ybWlvLmNyZWF0ZUZvcm0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1pbycpLCB7XHJcbi8vICAgY29tcG9uZW50czogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImxhYmVsXCI6IFwicmF0aW5nXCIsXHJcbi8vICAgICAgIFwidGFibGVWaWV3XCI6IGZhbHNlLFxyXG4vLyAgICAgICBcImtleVwiOiBcInJhdGluZ1wiLFxyXG4vLyAgICAgICBcInR5cGVcIjogXCJyYXRpbmdcIixcclxuLy8gICAgICAgXCJpbnB1dFwiOiB0cnVlXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9KTtcclxuXHJcbi8vIEZvcm1pby5idWlsZGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWlsZGVyJyksIHt9LCB7XHJcbi8vIH0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
