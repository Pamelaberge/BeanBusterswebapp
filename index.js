const serverless = require('serverless-http');
const express = require('express');

const app = express(); 


 app.get('/', (request, response) => {
    response.send('Hello World!')
}); 

module.exports.handler = serverless(app);