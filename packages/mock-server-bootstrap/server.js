#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require(path.join(__dirname, './data'));
const router = jsonServer.router(data)
const staticFilesDir = path.join(__dirname, './public');
const middlewares = jsonServer.defaults({static: staticFilesDir})

// =====================
// CONSTANTS
// =====================
const HOST = 'localhost';
const PORT = process.env.PORT || 3008;
const DELAY = 1000;

// =====================
// Style Components
// =====================
const indent = (text) => {
  const space = '   ';
  return space + text;
}

const newSection = (text) => {
  console.log();
  console.log(indent('---------------------'));
  console.log(indent(chalk.bold(text + ':')));
  console.log(indent('---------------------'));
}

const PrintResources = () => {
  const root = `http://${HOST}:${PORT}`;
  const properties = Object.getOwnPropertyNames(data);

  newSection('Docs Home')
  console.log(indent(root));


  newSection('Resources')
  properties.map(property => {
    console.log(indent(`${root}/${property}`));
  })
}

const delayMiddleware = (req, res, next) => {
  setTimeout(next, DELAY);
}

// =====================
// Set Up Server
// =====================

// Init Delay Middleware
server.use(delayMiddleware);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Use default router
server.use(router)

server.listen(PORT, () => {
  console.log('JSON Server is running')

  PrintResources()
})