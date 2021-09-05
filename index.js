/*
const HTTP = require('http');
const colros = require('colors')

const handleServer = function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
}

const server = HTTP.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.magenta);
});
*/

const express = require('express');
const colros = require('colors');

const server = express();

const port = 3000

server.get('/', (req, res) => {
    res.send('Hello World!');
  })

server.listen(port, () => {
    console.log(`Server on http://localhost:${port}`.yellow)
})

//Hell nos