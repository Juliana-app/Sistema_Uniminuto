document.querySelector(".mi-boton").addEventListener("click", function (e) {
    e.preventDefault(); // Previene la acción predeterminada
    document.body.classList.add("background-transition"); // Añadir la clase de transición

    // Redireccionar después de 1 segundo (duración de la animación)
    setTimeout(function () {
        window.location.href = "formularioLogin.html";
    }, 2000);
});
