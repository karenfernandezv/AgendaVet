function validarFormulario() {
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    document.getElementById('errorMessage').textContent = '';

    if (!email) {
        document.getElementById('errorMessage').textContent = 'El correo electrónico es obligatorio.';
        return false;
    }

    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(email)) {
        document.getElementById('errorMessage').textContent = 'El correo electrónico no es válido.';
        return false;
    }

    if (!password) {
        document.getElementById('errorMessage').textContent = 'La contraseña es obligatoria.';
        return false;
    }

    window.location.href = "/index.html";
    return true;
}
