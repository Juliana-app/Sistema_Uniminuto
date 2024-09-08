document.querySelector(".mi-boton").addEventListener("click", function (e) {
    e.preventDefault();

    const boton = document.querySelector(".mi-boton");
    const pacmanAnimation = document.querySelector(".pacman-animation");
    const logo = document.querySelector(".logo-texto"); // Corregido: Añadido el punto para seleccionar la clase

    // Cambiar el texto del botón a "Cargando..." y ocultar el botón
    boton.textContent = "Cargando...";
    boton.style.visibility = "hidden";  // Ocultar el botón usando visibility
    
    // Ocultar el logo y el texto
    logo.style.visibility = "hidden"; // Corregido: Ocultar el contenedor del logo y el texto

    // Mostrar la animación de Pacman y los puntos
    pacmanAnimation.style.visibility = "visible";  // Mostrar el contenedor de Pacman
    pacmanAnimation.style.opacity = "1";  // Asegurar que sea visible

    console.log("Pacman visible");  // Debugging: Confirmar que el Pacman sea visible

    // Transición de fondo
    document.body.classList.add("background-transition");

    // Redirigir después de 5 segundos y luego ocultar Pacman
    setTimeout(function () {
        pacmanAnimation.style.visibility = "hidden";  // Ocultar el contenedor de Pacman
        pacmanAnimation.style.opacity = "0";  // Asegurar que esté oculto
        console.log("Pacman oculto");  // Debugging: Confirmar que el Pacman sea oculto
        window.location.href = "paginas/formularioLogin.html";
    }, 5000);
});

