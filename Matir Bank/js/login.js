const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', login);

function credentialsCheck(email, password) {
  if (email == 'test@gmail.com' && password == '12345') {
    window.location.href = 'bank.html';
  } else {
    console.log('login failed ');
  }
}

function login() {
  const emailAdress = document.getElementById('email');
  const password = document.getElementById('password');
  credentialsCheck(emailAdress.value, password.value);
}
