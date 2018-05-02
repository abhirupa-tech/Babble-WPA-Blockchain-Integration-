//npm init -y adds the package.json
//npm install express --save adds the expressjs dependencies

console.log("Hello World");
const express = require("express");
var app = require("express")();

app.get('/',(req,res) =>{
    res.send("App hosted on server");
});

app.listen(3000);

// var http =require ("http");
// http.createServer(function (request, response) {
//
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Hello World\n');
// }).listen(3000);

console.log("Successfully Hosted");