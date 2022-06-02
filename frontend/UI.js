//manejo dle DOM + renderizar desde el app.js = intereactua con el navegador web

// importar el BookServices
import ClassBookService from "./services/BookService";
const classBookService = new ClassBookService();

//importamos el modulo timeago.js
import {format} from 'timeago.js'

class UI{
    //metodo que pinta todos los libros por pantalla
  async renderBooks() {

    // obtenemos los datos con getBook mediante su API
    const bookRender = await classBookService.getBook();

    // pintamos las cartas
    const booksCardContainer = document.getElementById('books-cards');
    booksCardContainer.innerHTML = '';

    //recorremos los datos para poder insertar la nueva carta
    bookRender.forEach(book => {

        // creamos el div en donde insertaremos los datos desde el backend
        const div = document.createElement('div');
        div.className = '';

        // ahora creamos el cuerpo del cual colocaremos los datos
        div.innerHTML = `
            <div class="card m-2" > 
                <div class="row">
                    <div class="col-md-6">
                        <img src="${book.imagePath}" alt='' class="image-fluid img-center-responsive">
                    </div>
                    <div class="col-md-6">
                        <div class="card-block px-2">
                            <h3>${book.title}</h4>
                            <p class="card-text">${book.author}</p>
                            <a href='#' class="btn btn-danger delete" _id="${book._id}"> X </a>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    ${format(book.created_at)}
            </div> 
        `;
        // ahora insertamos las otras tarjetas faltantes desde el backend
        booksCardContainer.appendChild(div)
    });
  }

    //metodo que agrega nuevos libros por pantalla
    async addNewBook(book){
        await classBookService.postBoook(book);
        // con este this lo que hago es llamar al metodo renderBook y asi traer los datos del backend
        this.renderBooks()
        
        // con este this, lo que hago es llamar al metodo para que se ejecute el codigo y resetear el formulario
        this.clearBookForm();
        
    }
    
    //metodo que limpia el formulario
    clearBookForm(){
        // limpia lo que se ingreso en el formulario
        document.getElementById('book-form').reset();
    }

    // metodo que renderiza un texto 
    // parametros: message, colorMessage, removeSeg
    renderMessage(message, colorMessage, removeSeg){

        // creamos el div para mostrar el msj 
        const div = document.createElement('div');
        
        // pintamos el alert y le asignamos el message
        div.className = `alert alert-${colorMessage} message`;
        
        // insertamos el texto dentro del div
        div.appendChild(document.createTextNode(message));


        const container = document.querySelector('.col-md-6')
        const bookForm = document.getElementById('book-form');
        
        // selecciona 
        container.insertBefore(div, bookForm);
        setTimeout(() => {

            document.querySelector('.message').remove();
        }, removeSeg);
    }
    
    //metodo que elimina los libros por pantalla
    async deleteBookUI(bookId){
        // con esto eliminamos el libro
        await classBookService.deleteBook(bookId);
        //con esto actualizamos el libro
        this.renderBooks();
        
    }


}

export default UI;