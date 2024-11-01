let emailValido = "cbtis@gmail.com";
let passValido = "straykids";

const chequeLogin = (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("LoginMensaje");

    if (email === emailValido && password === passValido) {
        mensaje.textContent = "Inicio de sesión correcto";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href="index.html"
        }, 100);
    } else {
        mensaje.textContent = "Email o contraseña incorrecta";
        mensaje.style.color = "red";
    }
}