const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hyuu API',
      version: '1.0.0',
      description: 'A simple Hyuu API',
    },
  },
  apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
};