// Create server using nodejs
// 1. Import the http library
const http=require('http');

// 2. Create server
const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === "/product"){
       return res.end ('This is a product')

    } else if(req.url === '/user'){
        res.end ('This is a user')
    }
    // here comes the request
    // res.end('Welcome to NodeJS Ninja Server!');
});

// 3. Specify a port to listen to client's requests
server.listen(3100, () => {
console.log('Server is listening on port 3100');  
});

// console.log('Server is listening on port 3100');
