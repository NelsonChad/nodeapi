//faz a importacao das bibliotecas
const app = require('../src/app'); //my
const http = require('http');
const debug = require('debug')('nodestr:server');

//const port = 3000; //uma porta
var port = normalizePort(process.env.PORT || '8080'); //Usa a funcao normalizePort
app.set('port', port); //seta a porta no objecto app

const server = http.createServer(app); //cria um servidor baseiado no objecto app

server.listen(port) //inicia o servidor escutando na porta  
server.on('error',onError); //executa a funcao onError para checar erros
server.on('listening', onListening ) //executa a funcao onListening para fazer o debug

console.log('Servidor Iniciado e API Rodando na Porta: '+ port);

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