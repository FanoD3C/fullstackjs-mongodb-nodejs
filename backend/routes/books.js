// REST API
const {Router} = require('express');
const router = Router();
const Book = require('../models/Book');


router.get('/', async (req, res) => {
    const books = await Book.find();
        // res.json({text: "Hola mundo desde un JSON"}));
    res.json(books);    
});

//crear ruta api/books

router.post('/', async (req,res) => {
    // recibimos los datos de respuesta del cliente
    const {title, author, isbn} = req.body;
    
    // lo guardamos en un nuevo objeto
    const newBook = new Book({title, author, isbn});
    
    // con await esperamos los datos para guardarlos
    await newBook.save();
    
    console.log(req.body)
    res.json({message: 'Libro guardado'});    

})

router.delete('/', async (req, res) => {
    
    await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'Libro borrado'});
    
})

module.exports = router;