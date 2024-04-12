function iniciarSesion(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "usuario" && password === "1234") {
        window.location.href = "http://127.0.0.1:5500/html/juegoCartas.html";
    }else{
        alert("Usuario o contasenia incorrectos. Por favor, intentelo de nuevo")
    }
}

document.querySelector('input[type="button"][value="Ingresar"]').addEventListener("click", function(){
    iniciarSesion();
});
