alert("Esta corriendo")
//desde aqui se requiere el codigo del css usando webpack y js 
import './styles/app.css'
import './styles/bootstrap.min.css'
//usamos el dom del formulario
document.getElementById('book-form')


//indicamos el evento submit 
.addEventListener( 'submit', e => {
    //.value guarda el valor 
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const isbn = document.getElementById("isbn").value;
    //.files guarda el archivo
    const image = document.getElementById("image").files;

    console.log(titulo + autor + isbn + image)

    //no se reinicia la pagina al tipear el boton
    e.preventDefault();
});

