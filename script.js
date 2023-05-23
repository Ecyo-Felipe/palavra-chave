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
  } else if (senha === 'kit1pc2023' && !manterLogin) {
    // Limpar a senha do usuário do localStorage (caso exista)
    localStorage.removeItem('senhaUsuario');
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


























