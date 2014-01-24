var restify = require('restify');


var server = restify.createServer({
    name: 'webhook',
    version: '0.0.1'
});

server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.gzipResponse());
server.use(restify.queryParser());

module.exports = server;
