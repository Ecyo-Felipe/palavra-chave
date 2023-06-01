const express = require('express');
const app = express();
const path = require('path');


// Configuração do diretório estático para arquivos HTML, CSS, JS, etc.
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/materiais', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'materiais.html'));
  });

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
  });

  app.get('/jogos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jogos.html'));
  });

  app.get('/jogoskit2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jogoskit2.html'));
  });













const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});