// // Optional: You can add JavaScript for interactivity here
// // For example, to handle form submission or enhance the UI

// // Example: Form submission handling
// const form = document.getElementById('booking-form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Example: Validate form fields (you might need more validation logic)
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phone = document.getElementById('phone').value.trim();

//     if (name === '' || email === '' || phone === '') {
//         alert('Please fill in all fields');
//         return;
//     }

//     // Example: You can send form data to server using fetch or other methods
//     // Replace 'submit_form.php' with your actual backend script URL
//     fetch('submit_form.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//             phone: phone,
//             message: document.getElementById('message').value.trim(),
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Example: Handle success or error response from server
//         console.log('Form submitted successfully:', data);
//         alert('Booking submitted successfully');
//         form.reset(); // Optional: Clear form fields after submission
//     })
//     .catch(error => {
//         console.error('Error submitting form:', error);
//         alert('Error submitting booking. Please try again later.');
//     });
// });
