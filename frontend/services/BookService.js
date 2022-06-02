// const { response } = require("express");
// esta clase se reutilizara, la llamamos cuando sea necesario desde el DOM

class ClassBookService {
    constructor(){
        // development
        // this.URI_API_BOOK = "http://localhost:3000/api/books";

        // production
        this.URI_API_BOOK = "/api/books";
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
        //con etse metodo podemos guardar el libro
        const responsePost = await fetch(this.URI_API_BOOK,{
            method: 'POST',
            body: book
        });
        // con data esperamos la repsuesta de los datos que estan en el back
        const data = await responsePost.json();
        // con este console log veemos que datos estamos capturando
        // console.log(data)
    }

    //borramos los datos
    async deleteBook(bookId){
        //con este metodo eliminamos el libro - para eliminar el libro se debe indicar la URI y el bookid al backend 
        const responseDelete = await fetch(`${this.URI_API_BOOK}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'Delete'
        });
        //aqui esperamos la respuesta del metodo
        const dataDelete = await responseDelete.json();
        console.log(dataDelete);
    }
    
}
// exportamos la clase ClassBookService del archivo BookService.js para poder usarse en otro archivo js 
export default ClassBookService