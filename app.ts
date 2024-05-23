import Fastify from "fastify";

import { Type, TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

import taskListRouter from "./src/routes/TaskListRoute";

const startServer = async () => {
  const server = Fastify({
    logger: true,
  }).withTypeProvider<TypeBoxTypeProvider>();

  server.register(taskListRouter);

  server.get("/", (request, reply) => {
    reply.send({ msg: "All Jacked up and good to go!" });
  });

  server.setErrorHandler((error, request, reply) => {
    server.log.error(error);
  });

  const port = process.env.SERVER_PORT || 3000;
  server.listen(port);
};

process.on("unhandledRejection", (e) => {
  console.error(e);
  process.exit(1);
});

startServer();
