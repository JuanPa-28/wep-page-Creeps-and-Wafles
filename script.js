document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const mainContent = document.getElementById('main-content');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Mostrar registro
    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'flex';
    });

    // Mostrar login
    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'flex';
    });

    // Procesar login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Validación simple (en un caso real, esto sería una llamada a un servidor)
        if (email && password) {
            // Guardar en localStorage (simulando autenticación)
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', email);
            
            // Ocultar login y mostrar contenido principal
            loginContainer.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Mostrar mensaje de bienvenida
            alert(`Bienvenido ${email}`);
        } else {
            alert('Por favor ingrese correo y contraseña');
        }
    });

    // Procesar registro
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        
        // Validaciones
        if (!name || !email || !password || !confirmPassword) {
            alert('Por favor complete todos los campos');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        // Guardar en localStorage (simulando base de datos)
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password); // En un caso real, NUNCA guardar contraseñas en localStorage
        
        // Mostrar mensaje de éxito y volver a login
        alert('Registro exitoso. Por favor inicie sesión.');
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'flex';
    });

    // Cerrar sesión
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('isAuthenticated');
        mainContent.style.display = 'none';
        loginContainer.style.display = 'flex';
        
        // Limpiar formularios
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
    });

    // Verificar autenticación al cargar la página
    if (localStorage.getItem('isAuthenticated') === 'true') {
        loginContainer.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});