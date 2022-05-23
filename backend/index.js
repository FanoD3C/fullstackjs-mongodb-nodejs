// verificar en que entorno estamos trabajando
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
    
    //ver entorno en que estamos trabajando
    console.log(process.env.NODE_ENV)
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//inicializacion
const app = express();
require('./database')

//settings
app.set('port', process.env.PORT || 3000 );


//middlewars
app.use(morgan("dev"));

//metodo multer
const storage = multer.diskStorage({
    //damos el destino para cargar las imagenes con el path
    destination: path.join(__dirname, 'public/uploads'),
    
    // file entrega la extension del archivo
    // path.extname extrae la extension
    filename(req, file, callb){
        callb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
// permite a la app subir img 1 c/u 
app.use(multer({storage}).single('image'));

//interpretar los datos desde formularios desde el frontend
app.use(express.urlencoded({extended: false}));

//interpreta los datos como json
app.use(express.json());

//Routes
app.use('/api/books',require('./routes/books'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//

// inicia el server
app.listen(app.get('port'),() => {
    console.log('Server en el puerto: ', app.get('port'))
})