const registerForm = document.querySelector('form.login-form');
registerForm.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const { email, password } = form.elements;

  const login = email.value.trim();
  const pass = password.value.trim();

  if (login === '' || pass === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: login,
    password: pass,
  };

  console.log(formData);
  form.reset();
}

document
  .querySelectorAll('input')
  .forEach(input => input.setAttribute('placeholder', 'Type Area'));
