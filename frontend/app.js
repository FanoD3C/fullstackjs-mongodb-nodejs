alert("Esta corriendo")
// aqui importamos la clase getBook postBook deleteBook desde el archivo BookService del backend 
// ahora este import lo tomamos desde UI.js
// import ClassBookService from './services/BookService'

//desde aqui se requiere el codigo del css usando webpack y js 
import './styles/app.css'
import './styles/bootstrap.min.css'

//importamos la clase UI
import UI from './UI';

//usamos un evento que capturamos los datos que estan desde la clase UI en el archivo UI.js
//esto indica que una vez que cargue el DOM
document.addEventListener('DOMContentLoaded', ()=> {
    // instanciamos la clase UI desde el archivo UI.js
    const uiClass = new UI();
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
    const uiClass = new UI();
    uiClass.addNewBook(formData);

    //mostrar por pantalla el msj
    uiClass.renderMessage('Nuevo Libro agregado', 'success', 3000)
    
    // COMENTAMOS ESTE CODIGO PORQUE AHORA ESTOY USANDO LAS CLASES QUE SE IMPORTARON DESDE UI.js
    // ahora bookService tiene todos los metodos que estan en ClassBookService();
    //agregando formData en postBook vemos que datos estamos mandando a guardar despues de apretar el boton submit
    // bookService.postBoook(formData)

    //no se reinicia la pagina al tipear el boton
    e.preventDefault();
});

document.getElementById('books-cards')
    .addEventListener('click', e => {
        const uiClass = new UI();
        
        // si el elemento tiene la clase delete
        if (e.target.classList.contains('delete')){
            // probamos con un console
            // console.log('eliminado');
            // probamos con un console si tomamos el Id
            // console.log(e.target.getAttribute('_id'));
            
            // deleteBookUI viene desde la clase importada UI
            uiClass.deleteBookUI(e.target.getAttribute('_id'));


            // los parametros de renderMessage vienen del importe de UI 
            // estos parametros son desde UI: (message, colorMessage, removeSeg)
            uiClass.renderMessage('Libro Borrado', 'danger', 2000)
            
        }

        // con esto evitamos que al eliminar un dato volvamos al inicio
        e.preventDefault();
    })