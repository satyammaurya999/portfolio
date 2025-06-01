// Handles contact form submission
function handleSubmit(event) {
  event.preventDefault();
  alert("Thanks for contacting me! I’ll get back to you soon.");
  event.target.reset();
  return false;
}

// Optional: add any other JS like dark mode toggle here
