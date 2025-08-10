import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./app.js'];

const doc = {
    info: {
        title: 'API de Adopción de mascotas',
        description: 'Esta API permite gestionar mascotas y usuarios'
    },
    host: 'localhost:5100',
    schemes: ['http']
}

swaggerAutogen()(outputFile, endPointsFiles, doc);
