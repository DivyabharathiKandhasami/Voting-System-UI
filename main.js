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