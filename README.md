# Introduction
This is a simple example (incomplete) of a simple Crud API supported by:
* Fastify (Web Framework)
* Postgres (DB)
* Prisma (ORM)
* Awilix (Dependency Injection)
* Jest (Testing)

## Project Structure
* `src/` - Contains the source code of the application
  * `controllers/` - Contains the controllers of the 
  application
  * `db` - Contains the database client 
  * `dto` - Contains the data transfer objects and request validation schemas (colocated)
  * `ioc` - Contains the dependency injection configuration
  * `services/` - Contains the services of the application
  * `routes/` - Contains the routes of the application
* `app.ts` - The main application file
* `test`
    * `unit` - Contains the unit tests
    * `integration` - Contains the integration tests (empty rn)
# Requirements
* Node.js 20.X
* Docker
* Docker Compose
* Prisma CLI

# Setup
First you need to make a copy of the `.env.example` file and rename it to `.env`. There should be no need to change anything in this file at this point.
```bash
cp .env.example .env
```

You need to have docker installed in your machine and the docker daemon running. Then you can run the following command to start the database:
```bash
docker-compose up -d
```

Install the dependencies:
```bash
npm i
```

Run the database migrations:
```bash
npx prisma migrate dev
```

Start the server:
```bash
npm dev
```

# Testing
To run the jest tests:
```bash
npm test
```
Currently there are only a few tests to show how to test the application using dependency injection and mocks/spies etc. The tests are not complete and should be expanded.

