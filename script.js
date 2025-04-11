document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');

  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const userData = {};
    
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    // Call the backend API to store user information in MongoDB
    // Example using fetch API
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Registration successful:', data);
      // You can redirect to a success page or perform other actions here
    })
    .catch(error => {
      console.error('Error during registration:', error);
      // Handle errors (display error messages, redirect to an error page, etc.)
    });
  });
});
