document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageBox = document.querySelector('.message-box');
    
    // Example endpoint - replace with your actual authentication endpoint
    fetch('https://yourdomain.com/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed.');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            showMessage('Login successful.', 'success');
            // Redirect to another page or perform other actions upon successful login
        } else {
            showMessage('Login failed. Invalid username or password.', 'error');
        }
    })
    .catch(error => {
        console.error('There was a problem with the login operation:', error);
        showMessage('Failed to login. Please try again.', 'error');
    });

    function showMessage(message, type) {
        if (!messageBox) {
            console.error('Message box element not found.');
            return;
        }

        messageBox.textContent = message;
        messageBox.className = 'message-box'; // Reset class
        messageBox.classList.add(type); // Add type class for styling if needed
        messageBox.style.display = 'block'; // Show message box
    }
});

function validateForm() {




    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var email = document.getElementById('email').value;
    var message_box = document.getElementById('message_box');
    var message = document.getElementById('message');
    var valid = true;
    var errorMsg = '';

    message.innerHTML = '';
    
    
    var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
    if (!usernameRegex.test(username)) {
        errorMsg += 'Check the Username.<br>';
        valid = false;
    }
    
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?\/`~])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?\/`~]{8,}$/;
    if (!passwordRegex.test(password)) {
        errorMsg += 'Check the Password.<br>';
        valid = false;
    }
    
    if (password !== confirm_password) {
        errorMsg += "Password doesn't match.<br>";
        valid = false;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsg += 'Check the Email.<br>';
        valid = false;
    }
    
    if (valid) {
        message.innerHTML = 'Signup Successful';
        message_box.style.display = 'block';
        return false
    } 
    else {
        message.innerHTML = errorMsg;
        message_box.style.display = 'block';
        return false
    }
}
