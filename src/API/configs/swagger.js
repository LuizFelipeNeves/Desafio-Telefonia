import swaggerJSDoc from 'swagger-jsdoc';

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Desafio Telefonia API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  openapi: '3.0.0',
};

// options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./src/API/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
