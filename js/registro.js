document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
    const registerEmail = document.getElementById('registerEmail');
    const registerUsername = document.getElementById('registerUsername');
    const registerPassword = document.getElementById('registerPassword');

    const emailError = document.getElementById('emailError');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    registerButton.addEventListener('click', function() {
        const email = registerEmail.value.trim();
        const username = registerUsername.value.trim();
        const password = registerPassword.value.trim();

        // Limpiar mensajes de error
        emailError.textContent = '';
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Validar email
        if (!email.includes('@')) {
            emailError.textContent = 'El correo electrónico debe contener "@"';
            console.log('Email validation failed');
            return;
        }

        // Validar nombre de usuario (sin caracteres especiales)
        const usernamePattern = /^[a-zA-Z0-9_]+$/;
        if (!usernamePattern.test(username)) {
            usernameError.textContent = 'El nombre de usuario solo puede contener letras, números y guiones bajos.';
            console.log('Username validation failed');
            return;
        }

        // Verificar si todos los campos están completos
        if (email && username && password) {
            // Obtener usuarios existentes del almacenamiento local
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Verificar si el usuario ya existe
            const userExists = users.some(user => user.username === username);
            const emailExists = users.some(user => user.email == email);
            
            if (userExists) {
                usernameError.textContent = 'El usuario ya existe.';
                console.log('User already exists');
            } if (emailExists) {
                emailError.textContent = 'El Email ingresado ya está registrado';
                console.log('Email is in use');
            } else {
                // Agregar nuevo usuario y guardar en almacenamiento local
                users.push({ email, username, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Usuario registrado exitosamente.');
                console.log('User registered successfully');
                // Opcionalmente, podrías redirigir a la página de inicio de sesión
                // window.location.href = 'login.html'; // Cambia esto por la URL de inicio de sesión
            }
        } else {
            passwordError.textContent = 'Por favor, complete todos los campos.';
            console.log('Incomplete fields');
        }
    });
});


