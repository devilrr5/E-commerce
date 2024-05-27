document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;

  if (username === 'user' && password === 'password') {
    alert('Login successful');
    // Redirect to homepage
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials');
  }
});
