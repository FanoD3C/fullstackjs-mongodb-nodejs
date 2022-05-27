//manejo dle DOM + renderizar desde el app.js = intereactua con el navegador web

// importar el BookServices
import ClassBookService from "./services/BookService";
const classBookService = new ClassBookService();

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

export default UI;