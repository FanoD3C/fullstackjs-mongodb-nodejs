// REST API
const {Router} = require('express');
const router = Router();
const Book = require('../models/Book');

//modulo para eliminar imagenes del sistema
const {unlink} = require('fs-extra')
const path =require('path')

router.get('/', async (req, res) => {
    const books = await Book.find().sort('_id');
        // res.json({text: "Hola mundo desde un JSON"}));
    res.json(books);    
});

//crear ruta api/books
router.post('/', async (req,res) => {
    // recibimos los datos de respuesta del cliente
    const {title, author, isbn} = req.body;
    
    // la imagen esta en un objeto req.file 
    //para poder guardarlo tenemos que llamar a la propiedad .filename -> req.file.filename
    //tenemos que agregar la ruta del proyecto en donde guardaremos la imagen
    const imagePath = '/uploads/' + req.file.filename;
    
    // lo guardamos en un nuevo objeto
    // add imagePath para que guarde la imagen en el proyecto y no el backend
    const newBook = new Book({title, author, isbn, imagePath});
    
    // con await esperamos los datos para guardarlos
    await newBook.save();
    
    // con estos console veemos por consola el arreglo de objetos desde la terminal
    // console.log(req.body)
    // console.log(req.file.filename)
    

    // deberia devolvernos como json la respuesta
    res.json({message: 'Libro guardado'});    
})

router.delete('/:id', async (req, res) => {
    
    const routerDelete = await Book.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public' + routerDelete.imagePath))
    res.json({message: 'Libro borrado'});
    
})

module.exports = router;