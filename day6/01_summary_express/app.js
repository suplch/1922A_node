
const http = require('http');




function my_express() {

    let getMap = new Map();
    let postMap = new Map();

    const server = http.createServer(function(request, response) {
        response.write()
        response.end()
        response.send = function(argv) {
            if (typeof argv === 'string') {
                response.write(argv);
                response.end();
            } else if (typeof argv === 'object') {
                response.write(JSON.stringify(argv));
                response.end();
            }
        }
        if (request.method === 'GET') {
            let callback = getMap.get(request.url);
            callback(request, response);
        } else if (request.method === 'POST') {
            let callback = postMap.get(request.url);
            callback(request, response);
        }
    
    });

    return {
        get: function(pathString, callback) {
            getMap.set(pathString, callback);
        },
        post: function(pathString, callback) {
            postMap.set(pathString, callback);
        },
        listen(port, callback) {
            server.listen(5000, callback);
        }
    }
}

const app = my_express();
app.get('/product_list', function(request, response) {
    response.send();
});

app.post('/add_product', function(request, response) {

})

app.listen(5000, function(err){

});

