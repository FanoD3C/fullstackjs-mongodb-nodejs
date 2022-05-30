/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/UI.js":
/*!************************!*\
  !*** ./frontend/UI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/BookService */ "./frontend/services/BookService.js");
//manejo dle DOM + renderizar desde el app.js = intereactua con el navegador web

// importar el BookServices

const classBookService = new _services_BookService__WEBPACK_IMPORTED_MODULE_0__["default"]();

class UI{
    //metodo que pinta todos los libros por pantalla
    async renderBooks(){
        //para renderizar los datos, se debe consultar primero los datos
        //los datos se obtiene desde la clase getBook dentro del archivo BookService.js
        const bookRender = await classBookService.getBook();

        //con este DOM pintaremos en pantalla el libro
        document.getElementById('books-cards');

        // con este console log probamos el codigo por consola/terminal
        console.log(bookRender);

    }

    //metodo que agrega nuevos libros por pantalla
    async addNewBook(book){
        await classBookService.postBoook(book);

        // con este this, lo que hago es llamar al metodo para que se ejecute el codigo y resetear el formulario
        this.clearBookForm();
    }
    
    //metodo que elimina los libros por pantalla
    deleteBookUI(){

    }

    //metodo que limpia el formulario
    clearBookForm(){
        // limpia lo que se ingreso en el formulario
        document.getElementById('book-form').reset();
    }

    //metodo que render un texto
    renderMessagez(){

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./frontend/styles/app.css");
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/bootstrap.min.css */ "./frontend/styles/bootstrap.min.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./frontend/UI.js");
alert("Esta corriendo")
// aqui importamos la clase getBook postBook deleteBook desde el archivo BookService del backend 
// ahora este import lo tomamos desde UI.js
// import ClassBookService from './services/BookService'

//desde aqui se requiere el codigo del css usando webpack y js 
;


//importamos la clase UI


//usamos un evento que capturamos los datos que estan desde la clase UI en el archivo UI.js
//esto indica que una vez que cargue el DOM
document.addEventListener('DOMContentLoaded', ()=> {
    // instanciamos la clase UI desde el archivo UI.js
    const uiClass = new _UI__WEBPACK_IMPORTED_MODULE_2__["default"]();
    //utilizamos su metodo renderBooks
    uiClass.renderBooks();
})


//usamos el dom del formulario
document.getElementById('book-form')
//indicamos el evento submit 
.addEventListener( 'submit', e => {
    //.value guarda el valor 
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    //.files guarda el archivo
    const image = document.getElementById("image").files;

    //crear un objeto con los datos necesarios para poder enviarlo, estos datos son: titulo,autor,isbn,image
    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    console.log(title + author + isbn + image)
    // cunado se instancia una clase se debe almacenar en otra variable
    
    //instanciamos UI 
    const uiClass = new _UI__WEBPACK_IMPORTED_MODULE_2__["default"]();
    uiClass.addNewBook(formData);
    
    // COMENTAMOS ESTE CODIGO PORQUE AHORA ESTOY USANDO LAS CLASES QUE SE IMPORTARON DESDE UI.js
    // ahora bookService tiene todos los metodos que estan en ClassBookService();
    //agregando formData en postBook vemos que datos estamos mandando a guardar despues de apretar el boton submit
    // bookService.postBoook(formData)

    //no se reinicia la pagina al tipear el boton
    e.preventDefault();
});

// rut 13 329 279 9
// 
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map