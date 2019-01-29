'use strict'
//faz a importacao das bibliotecas
const http = require('http');
const express = require('express');
const debug = require('debug')('nodestr:server');

const app = express(); //cria um objecto express
//const port = 3000; //uma porta
var port = normalizePort(process.env.PORT || '3000'); //Usa a funcao normalizePort
app.set('port', port); //seta a porta no objecto app

const server = http.createServer(app); //cria um servidor baseiado no objecto app
const router = express.Router(); //cria routas

//Cria uma routa do tipo GET
var route = router.get('/',(req, res, next) =>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route); //publica a routa

server.listen(port) //inicia o servidor escutando na porta  
server.on('error',onError); //executa a funcao onError para checar erros
server.on('listening', onListening ) //executa a funcao onListening para fazer o debug

console.log('API rodando na porta: '+ port);

// Normalize a port into a number, string, or false. (Gerada pelo express)
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
// Manda um erro caso haja um problema com a porta ou conexao
function onError(error) {
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port:
        'Port ' + port;
    switch(error.code){
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Funcao que faz o debug
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on '+ bind)
}