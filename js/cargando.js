document.querySelector(".mi-boton").addEventListener("click", function (e) {
    e.preventDefault();

    const boton = document.querySelector(".mi-boton");
    const pacmanAnimation = document.querySelector(".pacman-animation");

    // Cambiar el texto del botón a "Cargando..." y ocultar el botón
    boton.textContent = "Cargando...";
    boton.style.visibility = "hidden";  // Ocultar el botón usando visibility

    // Mostrar la animación de Pacman y los puntos
    pacmanAnimation.style.visibility = "visible";  // Mostrar el contenedor de Pacman
    pacmanAnimation.style.opacity = "1";  // Asegurar que sea visible

    console.log("Pacman visible");  // Debugging: Confirmar que el Pacman sea visible

    // Transición de fondo
    document.body.classList.add("background-transition");

    // Animación de desaparición de los puntos de comida después de 0.5 segundos
    setTimeout(function () {
        document.querySelectorAll(".punto").forEach(function(punto) {
            punto.style.animation = "desaparecer 1.5s ease-in-out forwards";  // Aplicar animación de desaparición
        });
    }, 1000);

    // Redirigir después de 1 segundo y luego ocultar Pacman
    setTimeout(function () {
        pacmanAnimation.style.visibility = "hidden";  // Ocultar el contenedor de Pacman
        pacmanAnimation.style.opacity = "0";  // Asegurar que esté oculto
        console.log("Pacman oculto");  // Debugging: Confirmar que el Pacman sea oculto
        window.location.href = "paginas/inicio.html";
    }, 5000);
});

