import dotenv from 'dotenv';
import app from './app.js';
import { setupDatabase } from './config/setupDb.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        // Configuración de la base de datos
        await setupDatabase();

        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error al iniciar la aplicación:', err.message);
    }
})();
