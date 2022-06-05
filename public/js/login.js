const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    console.log(`Login User ${email}`);
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/results');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const zipcode = document.querySelector('#zipcode-signup').value.trim();
  if (zipcode && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ zipcode, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/results');
    } else {
      alert(response.statusText);
    }
  }
};

window.addEventListener('load', () => {
  const loginForm = document.querySelector('#submit-login');
  const submitForm = document.querySelector('#submit-signup');
  if (loginForm) {
    loginForm.addEventListener('click', loginFormHandler);
  }
  if (submitForm) {
    submitForm.addEventListener('click', signupFormHandler);
  }
});
