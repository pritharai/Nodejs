// Import http library
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {

    console.log(req.url);
    if(req.url === "/user"){
        // response ends
        return res.end('This is user page');
    }else if(req.url === "/product"){
        res.end('This is product page');
    }else{
        // modifying the response 
    res.end('Welcome to Nodejs Ninja Server');
    // logging.

    }
    
});

// Specofy a port to listen to client's requests
server.listen(3100, () => {
   console.log('server listening on port 3100');

});