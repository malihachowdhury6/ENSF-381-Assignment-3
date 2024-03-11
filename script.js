document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageBox = document.querySelector('.message-box');
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(users => {
        const user = users.find(u => u.name === username && u.email === password);
        if (user) {
            showMessage('Login successful.', 'success');
        } else {
            showMessage('Login failed. Invalid username or password.', 'error');
        }
    })
    .catch(error => {
        alert('Failed to fetch user data. Please try again.');
        console.error('There was a problem with the fetch operation:', error);
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
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        // Validation checks
        const username = this.querySelector('[name="username"]').value;
        const password = this.querySelector('[name="password"]').value;
        const confirmPassword = this.querySelector('[name="confirm_password"]').value;
        const email = this.querySelector('[name="email"]').value;
        let errorMessage = '';

        // Username validation
        if (!/^[A-Za-z][A-Za-z0-9_-]{2,19}$/.test(username)) {
            errorMessage += 'Username is invalid.\n';
        }

        // Password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()\-_=+[\]{}|;:'",.<>?/`~]{8,}$/.test(password)) {
            errorMessage += 'Password is invalid.\n';
        }

        // Confirm Password validation
        if (password !== confirm_password) {
            errorMessage += 'Passwords do not match.\n';
        }

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage += 'Email is invalid.\n';
        }

        displayMessage(errorMessage);
    });
});

function displayMessage(message) {
    let messageBox = document.querySelector('#messageBox');
    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.id = 'messageBox';
        messageBox.style.border = '2px solid';
        messageBox.style.backgroundColor = '#f9f9f9';
        messageBox.style.padding = '10px';
        messageBox.style.margin = '20px';
        document.body.appendChild(messageBox);
    }

    messageBox.innerHTML = ''; // Clear previous message
    const messageParagraph = document.createElement('p');
    if (message) {
        messageParagraph.textContent = `Error: ${message}`;
    } else {
        messageParagraph.textContent = 'Signup successful!';
    }
    messageBox.appendChild(messageParagraph);
}
