
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
const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const adhar = document.getElementById("adhar").value.trim();
  const voter = document.getElementById("voter").value.trim();
  const voterImage = document.getElementById("voterImage").files[0];

  if (!name || !dob || !gender || !email || !phone || !adhar || !voter || !voterImage) {
    alert("Please fill out all fields correctly.");
    return;
  }

  alert("Registration Successful!");
  form.reset();
});
