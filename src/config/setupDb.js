import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Constantes para configuración de base de datos y conexión
const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'admin',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Función para crear la conexión al pool principal
const createDatabasePool = () => {
  return createPool({
    ...DB_CONFIG,
    database: process.env.DB_NAME || 'datos_empleado'
  });
};

// Conexión inicial para crear la base de datos si no existe
// Función para configurar la base de datos y crear la tabla COLABORADOR
export const bootstrapConnection = async () => {
    try {
      const connection = await createPool(DB_CONFIG); // Conexión inicial sin especificar la base de datos
  
      // Crear la base de datos si no existe
      await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'datos_empleado'}`);
      console.log(`Base de datos '${process.env.DB_NAME}' creada correctamente.`);
  
      // Usar la base de datos
      await connection.query(`USE ${process.env.DB_NAME || 'datos_empleado'}`);
  
      // Crear la tabla COLABORADOR por si no existe
      await connection.query(`
        CREATE TABLE IF NOT EXISTS COLABORADOR (
          IDCOLABORADOR INT AUTO_INCREMENT PRIMARY KEY,
          NOMBRE VARCHAR(45) NOT NULL,
          APELLIDO VARCHAR(45) NOT NULL,
          DIRECCION VARCHAR(45),
          EDAD INT NOT NULL,
          PROFESION VARCHAR(45),
          ESTADOCIVIL VARCHAR(45)
        );
      `);
      console.log('Tabla COLABORADOR creada correctamente.');
  
      await connection.end(); // Cerramos la conexión inicial
    } catch (err) {
      console.error('Error durante la configuración inicial:', err.message);
      throw err;
    }
  };
  

// Conexión al pool principal después de crear la base
export const db = createDatabasePool();

// Inicializar configuración de la base de datos
export const setupDatabase = async () => {
  try {
    await bootstrapConnection(); // Crear la base si no existe
    console.log('Base de datos lista para usarse.');
  } catch (err) {
    console.error('Error configurando la base de datos:', err.message);
    process.exit(1); // Detenemos el proceso si hay un error crítico
  }
};
