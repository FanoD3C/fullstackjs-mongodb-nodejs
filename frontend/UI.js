//manejo dle DOM + renderizar desde el app.js = intereactua con el navegador web

// importar el BookServices
import ClassBookService from "./services/BookService";
const classBookService = new ClassBookService();

//importamos el modulo timeago.js
import {format} from 'timeago.js'

class UI{
    //metodo que pinta todos los libros por pantalla
    async renderBooks(){
        //para renderizar los datos, se debe consultar primero los datos
        //los datos se obtiene desde la clase getBook dentro del archivo BookService.js
        const bookRender = await classBookService.getBook();

        //con este DOM pintaremos en pantalla el libro
        const bookRenderContainer = document.getElementById('books-cards');
        
        //aseguramos que el contenedor este vacion sin ningun elemento html
        bookRenderContainer.innertHTML = '';

        //recorremos los libros qeu tenemos guardado en el backend
        //el elemento 'book' es usado porque sera el nombre del elemento que se usara en los sgts metodos:
        //addNewBook -> deleteBookUI -> clearBookUI
        bookRender.forEach(book => {
            // creamos el div en donde insertaremos los datos desde el backend
            const div = document.createElement('div');
            div.className = '';
            // ahora creamos el cuerpo del cual colocaremos los datos
            div.innerHTML = `
                <div class="card m-2" > 
                    <div class="row">
                        <div class="col-md-6">
                            <img src="http://localhost:3000${book.imagePath}" alt='' class="image-fluid">
                        </div>
                        <div class="col-md-6">
                            <div class="card-block px-2">
                                <h3>${book.title}</h4>
                                <p class="card-text">${book.author}</p>
                                <h5>${book.isbn}</h5>
                                <a href='#' class="btn btn-danger delete" _id="${book._id}"> X </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${format(book.created_at)}
                </div> 
            `;
            // ahora insertamos las otras tarjetas faltantes desde el backend
            bookRenderContainer.appendChild(div)
        });

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

export default UI;