const http = require("http")

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);


const fs = require("fs")

const url = require("url")

http.createServer(function (req, res) {

    const q = url.parse(req.url, true)
    let filename = "." + q.pathname + ".html";

    if (q.pathname === "/" ) {
        
        filename = "index.html"

    } 

    

    fs.readFile(filename, function(err, data) {
        
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end("404 Not Found")
        }

        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(data)
        return res.end()
    })

}).listen(8080)


// http.createServer(function (req, res) {
//     fs.readFile("about.html", function(err, data) {
//         res.writeHead(200, {"Content-Type": "text/html"})
//         res.write(data)
//         return res.end()
//     })

// }).listen(8080/about)


// http.createServer(function (req, res) {
//     fs.readFile("contact-me.html", function(err, data) {
//         res.writeHead(200, {"Content-Type": "text/html"})
//         res.write(data)
//         return res.end()
//     })

// }).listen(8080/contact-me)


