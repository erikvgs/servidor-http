const http = require('http');

const server = http.createServer((req, res) => {
    const resp = {}; //constante de respostas
    resp['/'] = '<h1>Deu Certo</h1>';
    resp['/sobre'] = '<h1>Sobre</h1>';
    resp['/contato'] = '<h1>Contato</h1>';

    //aqui vai verificar se a URL existe no objeto resp
    if (resp[req.url]) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Página</title>
</head>
<body>
    ${resp[req.url]}
</body>
</html>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Página Não Encontrada</title>
</head>
<body>
    <h1>Página não encontrada</h1>
</body>
</html>`);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor centralizado em: http://localhost:3000');
    console.log('Para desligar o nosso servidor: CTRL + C');
});
