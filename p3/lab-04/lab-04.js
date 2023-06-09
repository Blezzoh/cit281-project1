// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
const fs = require("fs")

const {format_name} = require("./lab04-module")
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});

// create another route
fastify.get("/name", (request, reply) => {

  console.log(request.query);
  const {first, last} = request.query;

  // let my_var = <condition> ? <if true > : <if false>
  const response = first !== undefined && last !== undefined ? `<h1> Hello, ${first} ${last}` : "<h1>Hello, Guest</h1>";
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(response);
  
});

fastify.get("/package", (request, reply)=>{
  fs.readFile("./package.json", (err, data) =>{
    if(err){
      reply
      .code(500)
      .header("Content-Type", "text/text; charset=utf-8")
      .send("File not found!")
    }
    else{
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(data)
    }
  })

})
// create another route
fastify.get("/names", (request, reply) => {

  console.log(request.query);
  const {first, last} = request.query;

  // let my_var = <condition> ? <if true > : <if false>
  const response = format_name(first,last);
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(response);
  
});
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});