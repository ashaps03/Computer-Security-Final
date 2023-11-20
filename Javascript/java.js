
function loadScript(src, callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

loadScript('{% static "myapp4/js/ticketmaster.js" %}', function(){
    console.log('Script loaded!'); 
});

function login() {
    // Implement your login logic here
    alert('Login button clicked');
}

function createAccount() {
  // Get the values from the input fields
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  // Hash the password using SHA-256
  const encoder = new TextEncoder();
  const data = encoder.encode(passwordInput);

  // Use the crypto.subtle.digest API for hashing
  crypto.subtle.digest('SHA-256', data)
      .then(hashBuffer => {
          // Convert the hash ArrayBuffer to a hex string
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

          // Display the hashed password and username
          alert('Hashed Password: ' + hashHex + '\nUsername: ' + usernameInput);

          // Now, send the data to your server
          const url = 'http://127.0.0.1:5500/create-account';  // Replace with your actual server endpoint

          fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username: usernameInput,
                  password: hashHex,
              }),
          })
          .then(response => response.json())
          .then(data => {
              console.log('Success:', data);
          })
          .catch((error) => {
              console.error('Error:', error);
          });
      })
      .catch(error => console.error('Hashing error:', error));
}