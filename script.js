document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!');
        // Form can be submitted here (e.g., via AJAX or form action)
    }
});
