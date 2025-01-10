async function Click(event) {
    event.preventDefault();
    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');
  
    const username = document.getElementById('Username').value;
    const password = document.getElementById('pswd').value;
    let valid = true;
  
    if (username.trim() === '') {
        nameError.textContent = 'Username is required';
        valid = false;
    }
    else {
      nameError.textContent = '';
    }
  
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required';
        valid = false;
  
    }
    else {
      passwordError.textContent = '';
    }
    window.location = "login.html"
  
}
  // Toggle password visibility
  function togglePassword() {
    const passwordInput = document.getElementById('pswd');
    const passwordIcon = document.getElementById('togglePassword');
    
    // Check current type and toggle it
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordIcon.classList.remove('fa-eye');
      passwordIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      passwordIcon.classList.remove('fa-eye-slash');
      passwordIcon.classList.add('fa-eye');
    }
}