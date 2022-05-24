/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/services/BookService.js":
/*!******************************************!*\
  !*** ./frontend/services/BookService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// const { response } = require("express");

// esta clase se reutilizara, la llamamos cuando sea necesario desde el DOM

class ClassBookService {
    constructor(){
        this.URI_API_BOOK = "http://localhost:3000/api/books"
    }
    
    //meotodos para utilizar en esta app de libros

    // obtener datos
    async getBook(){
        // con fetch hacemos una peticion a mi URI, sin una conversion, es decir datos crudos
        const responseGet = await fetch(this.URI_API_BOOK);
        
        //con responseGet.json obtenemos el dato legible en un json y ahora esta convertido
        const books = await responseGet.json();
        return books;
    }

    // guardamos los datos
    // los datos son entregados a postBook desde los datos obtenidos en getBook
    async postBoook(book){
        //
        const responsePost = await fetch(this.URI_API_BOOK,{
            method: 'POST',
            body: book
        });

        const data = await responsePost.json();
        // con este console log veemos que datos estamos capturando
        console.log(data)
    }

    //borramos los datos
    async deleteBook(bookId){
        const responseDelete = await fetch(`${this.URI_API_BOOK}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        const dataDelete = await responseDelete.json();
        console.log(dataDelete);
    }

}
// exportamos la clase ClassBookService del archivo BookService.js para poder usarse en otro archivo js 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassBookService);

/***/ }),

/***/ "./frontend/styles/app.css":
/*!*********************************!*\
  !*** ./frontend/styles/app.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/styles/bootstrap.min.css":
/*!*******************************************!*\
  !*** ./frontend/styles/bootstrap.min.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/BookService */ "./frontend/services/BookService.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./frontend/styles/app.css");
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/bootstrap.min.css */ "./frontend/styles/bootstrap.min.css");
alert("Esta corriendo")
;
//desde aqui se requiere el codigo del css usando webpack y js 


//usamos el dom del formulario
document.getElementById('book-form')


//indicamos el evento submit 
.addEventListener( 'submit', e => {
    //.value guarda el valor 
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const isbn = document.getElementById("isbn").value;
    //.files guarda el archivo
    const image = document.getElementById("image").files;

    //crear un objeto con los datos necesarios para poder enviarlo, estos datos son: titulo,autor,isbn,image
    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('titulo', title);
    formData.append('autor', author);
    formData.append('isbn', isbn);

    console.log(titulo + autor + isbn + image)
    // cunado se instancia una clase se debe almacenar en otra variable
    const bookService = new _services_BookService__WEBPACK_IMPORTED_MODULE_0__["default"]();
    
    // ahora bookService tiene todos los metodos que estan en ClassBookService();
    //agregando formData en postBook vemos que datos estamos mandando a guardar despues de apretar el boton submit
    bookService.postBoook(formData)

    //no se reinicia la pagina al tipear el boton
    e.preventDefault();
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map