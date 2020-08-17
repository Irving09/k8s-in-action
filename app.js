const http = require('http');
const os = require('os');

const listenerPort = 8080;
console.log('Kubia server starting...');
console.log('Local hostname is', os.hostname());
console.log(('Listening on port', listenerPort));

const handler = (request, response) => {
  const clientIp = request.connection.remoteAddress;
  console.log('Received request for', request.url, 'from', clientIp);
  response.writeHead(200);
  response.write(`Hey there, this is: ${os.hostname()}\n`);
  response.write(`Client ip is: ${clientIp}`);
  response.end('\n');
}

const server = http.createServer(handler);
server.listen(listenerPort);