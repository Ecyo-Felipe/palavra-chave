// No início do arquivo "script.js"
ocultarExtensaoHTML();


const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

// Função para verificar o login e redirecionar o usuário
function fazerLogin() {
  const senha = document.querySelector('input[name="password"]').value;
  const manterLogin = document.querySelector('.input--checkbox').checked;

  if (senha === 'kit1pc2023' && manterLogin) {
    // Salvar a senha do usuário no computador (exemplo usando localStorage)
    localStorage.setItem('senhaUsuario', senha);
    // Redirecionar para outra página
    window.location.href = 'jogos.html';
  }
}

// Função para ocultar a extensão .html nas páginas
function ocultarExtensaoHTML() {
  const paginas = document.querySelectorAll('a[href$=".html"]');
  paginas.forEach((pagina) => {
    const href = pagina.getAttribute('href');
    const novaHref = href.replace('.html', '');
    pagina.setAttribute('href', novaHref);
  });
}


// No final do arquivo "script.js"
const buttonEntrar = document.querySelector('.login__button');
buttonEntrar.addEventListener('click', fazerLogin);

























// document.addEventListener('DOMContentLoaded', function() {
//   var loginButton = document.querySelector('.login__button');
//   loginButton.addEventListener('click', checkPassword);

//   // Verificar se o usuário já está logado
//   var isLoggedIn = localStorage.getItem('isLoggedIn');
//   var checkboxInput = document.querySelector('.input--checkbox');
//   checkboxInput.checked = isLoggedIn === 'true';
// });

// function checkPassword() {
//   var passwordInput = document.querySelector('input[name="password"]');
//   var password = passwordInput.value;

//   if (password === 'kit1pc2023') {
//     var checkboxInput = document.querySelector('.input--checkbox');
//     if (checkboxInput.checked) {
//       // Armazenar a informação de login no localStorage
//       localStorage.setItem('isLoggedIn', 'true');
//     }

//     if (window.location.href.endsWith(".html")) {
//       window.location.href = window.location.href.replace(".html", "");
//     } else {
//       window.open('./jogos.html', '_blank');
//     }
//   } else {
//     alert('Senha incorreta, tente novamente.')
//   }
// }
