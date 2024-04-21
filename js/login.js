const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "user" && password === "1234") {
        window.location.href = "juegoCartas.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, intentelo de nuevo");
    }

});