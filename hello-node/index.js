// Require the framework and instantiate it
const Fastify = require("fastify");
const process = require("node:process");

const server = Fastify({ logger: true });

server.get("/", async () => {
  return { hello: 'world' }
})

server
  .listen({ port: 3000, host: "0.0.0.0" })
  .catch(err => {
    server.log.error(err);
    process.exit(1);
  });

console.log(`This process is pid ${process.pid}`);
