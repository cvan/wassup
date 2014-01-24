var spawn = require('child_process').spawn;

var server = require('./server');


function view(req, res) {
    console.log(req.params);
    spawn('say', ['wassup']);
    res.end('wassup');
}

server.get('/', view);
server.post('/', view);


server.listen(process.env.PORT || 5000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
