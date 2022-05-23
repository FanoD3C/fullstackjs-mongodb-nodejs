const { response } = require("express");

class BookServices {
    constructor(){
        this.URI_API_BOOK = "http://localhost:3000/api/books"
    }

    // obtener datos
    getBook(){
        const responseGet = await fetch(this.URI_API_BOOK);
        const books = responseGet.json();
        return books;
    }

    // guardamos los datos
    postBoook(book){
        const responsePost = await fetch(this.URI_API_BOOK,{
            method: 'POST',
            body: book
        });
        const data = responsePost.json();
    }

    //borramos los datos
    deleteBook(){
        fetch(this.URI_API_BOOK)
    }

}