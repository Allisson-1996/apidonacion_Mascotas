import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotasR.js';
import routesUsuarios from './routes/usuariosR.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import swaggerUI from 'swagger-ui-express';
import fs from 'fs';

const app = express();

// Carga swagger.json con fs y JSON.parse
const swaggerDocumentation = JSON.parse(fs.readFileSync('./swagger.json', 'utf-8'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

app.use('/pets', routesMascotas);
app.use('/users', routesUsuarios);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log('Servidor activo ' + PORT));
} catch (e) {
  console.log(e);
}

process.on('SIGINT', async () => {
  dbClient.cerrarConexion();
  process.exit(0);
});
