function login() {
    // Implement your login logic here
    alert('Login button clicked');
}

function createAccount() {
    // Hash the password using SHA-256
    const passwordInput = document.getElementById('password').value;

    // Convert the password string to an ArrayBuffer
    const encoder = new TextEncoder();
    const data = encoder.encode(passwordInput);

    // Use the crypto.subtle.digest API for hashing
    crypto.subtle.digest('SHA-256', data)
        .then(hashBuffer => {
            // Convert the hash ArrayBuffer to a hex string
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
            
            // Display the hashed password (in a real application, send it to the server)
            alert('Hashed Password: ' + hashHex);
        })
        .catch(error => console.error('Hashing error:', error));
}