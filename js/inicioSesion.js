document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');

    const loginUsernameError = document.getElementById('loginUsernameError');
    const loginPasswordError = document.getElementById('loginPasswordError');

    loginButton.addEventListener('click', function() {
        const username = loginUsername.value.trim();
        const password = loginPassword.value.trim();

        // Limpiar mensajes de error
        loginUsernameError.textContent = '';
        loginPasswordError.textContent = '';

        // Verificar si todos los campos están completos
        if (username && password) {
            // Obtener usuarios existentes del almacenamiento local
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Verificar si las credenciales son correctas
            const user = users.find(user => user.username === username && user.password === password);
            
            if (user) {
                alert('Inicio de sesión exitoso.');
                window.location.href = 'home.html'; 
            } else {
                loginUsernameError.textContent = 'Nombre de usuario o contraseña incorrectos.';
                console.log('Login failed');
            }
        } else {
            if (!username) loginUsernameError.textContent = 'Por favor, ingresa tu nombre de usuario.';
            if (!password) loginPasswordError.textContent = 'Por favor, ingresa tu contraseña.';
            console.log('Incomplete fields');
        }
    });
});
