import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/colaborador.routes.js';
import helmet from 'helmet';
import { generateToken } from './helper/generateToken.js';
import verifyToken from './middlewares/validateToken.js';

const app = express();

// Middlewares globales
app.use(morgan('dev')); // Para tener registros de las solicitudes en consola
app.use(cors()); // Habilita CORS para permitir solicitudes desde cualquier origen
app.use(express.json()); // Parsear cuerpos JSON
app.use(express.urlencoded({ extended: false })); // Parsear datos de formularios
app.use(helmet()); // Mejora la seguridad de la aplicación

// Generador del token
generateToken(); // Esto imprimirá el token en consola

// Rutas protegidas
app.use('/colaborador', verifyToken, router); // Aplica el middleware `verifyToken` antes de las rutas

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
    });
});

// Middleware para manejo global de errores (opcional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Ocurrió un error interno en el servidor',
    });
});

export default app;
