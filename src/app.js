var http = require('http');
var fs = require('fs'); 
var express = require('express');
var path = require('path')

var htmlData, cssData, jsData;

fs.readFile('src/files/login.html',(err, data)=>{
  if(err){
    htmlData = err;
  }
    htmlData = data;
});

fs.readFile('src/files/styles.css',(err, data)=>{
  if(err){
    cssData = err;
  }
    cssData = data;
});

//const httpServer = http.createServer(serverHandler);
const app = express();
//app.use(express.json());
app.use(express.static('files'))
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get('/src/styles.css', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(cssData); //read the file & write the data content
  res.end();
})

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlData); //read the file & write the data content
  //res.writeHead(200, {'Content-Type': 'text/css'});
  res.write(cssData); //read the file & write the data content
  res.end();
})

// function serverHandler(req, res) {
//   // add a HTTP header:
//    switch (req.url) {
//     case '/':
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(htmlData); //read the file & write the data content
//       res.end();
//       break;
    
//     case '/src/styles.css':
//       res.writeHead(200, {'Content-Type': 'text/css'});
//       res.write(cssData); //read the file & write the data content
//       res.end();
//       break;   
    
//     case '/js':
//       res.writeHead(200, {'Content-Type': 'text/js'});
//       res.write(jsData); //read the file & write the data content
//       res.end();
//       break;  

//     default:
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.write('error'); //read the file & write the data content
//       res.end();
//       break;
//    }   
//   }

//   httpServer.listen(8080,()=>{console.log("PORT is 8080")});