const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
    const url = new URL(`https://${req.headers.host}${req.url}`);
    const file = `./public${url.pathname}`;

    function fileReader(file){
        fs.readFile(file, (err, data) => {
            if(err){
                fileReader('./public/404.html');
                return;
            }
    
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

    fileReader(file);

}).listen(8080);