const { response } = require("express");

// esta clase se reutilizara, la llamamos cuando sea necesario desde el DOM

class BookServices {
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
    }

    //borramos los datos
    async deleteBook(bookId){
        const responseDelete = await fetch(`${this.URI_API_BOOK}/${bookId}`. {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        const dataDelete = await responseDelete.json();
        console.log(dataDelete);
    }

}