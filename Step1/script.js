const form = document.getElementById('signupForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

 
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  let isValid = true;

  
  if (username.length < 3) {
    document.getElementById('usernameError').textContent = 'Username must be at least 3 characters';
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address';
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    isValid = false;
  }


  if (isValid) {
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      document.getElementById('emailError').textContent = 'Email already registered!';
      return;
    }

   
    const newUser = {
      username,
      email,
      password  
    };

    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    
    alert("Signup Successful ");
    form.reset();
  }
});
