function showLogin() {
    document.getElementById('poster-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('catalog-section').style.display = 'none';
}

function showRegister() {
    document.getElementById('poster-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
    document.getElementById('catalog-section').style.display = 'none';
}

function handleLogin() {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;

    // For now, just mock verification (can be replaced with actual backend logic)
    if (userID === 'user123' && password === 'password123') {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('catalog-section').style.display = 'block';
        return false; // Prevent form submission
    } else {
        alert('Invalid User ID or Password');
        return false; // Prevent form submission
    }
}
