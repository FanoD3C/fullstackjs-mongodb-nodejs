alert("Esta corriendo")
import './styles/app.css'
import './styles/bootstrap.min.css'
document.getElementById('book-form')

.addEventListener( 'submit', e => {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const isbn = document.getElementById("isbn").value;
    const image = document.getElementById("image").files;

    console.log(titulo + autor + isbn + image)

    e.preventDefault();
});

