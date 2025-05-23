// script.js
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});



// Chatbox Functionality
const chatboxContainer = document.getElementById('chatbox-container');
const chatboxToggle = document.getElementById('chatbox-toggle');
const closeChatbox = document.getElementById('close-chatbox');
const sendButton = document.getElementById('send-button');
const chatInput = document.getElementById('chat-input');
const chatboxBody = document.getElementById('chatbox-body');

// Toggle Chatbox
chatboxToggle.addEventListener('click', () => {
    chatboxContainer.style.display = 'flex';
    chatboxToggle.style.display = 'none';
});

// Close Chatbox
closeChatbox.addEventListener('click', () => {
    chatboxContainer.style.display = 'none';
    chatboxToggle.style.display = 'block';
});



 

            try {
                const response = await fetch('http://localhost:5000/send-email', { // Your backend endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData), // Sending form data as JSON
                });

                if (response.ok) {
                    alert('Message sent successfully!');
                    document.getElementById('contactForm').reset(); // Reset the form after submission
                } else {
                    alert('Failed to send message.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            }
        