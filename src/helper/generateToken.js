import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

export const generateToken = () => {
  const payload = {
    role: 'admin',
    access: 'full',
  };

  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Token generado:', token);
    return token;
  } catch (err) {
    console.error('Error generando el token:', err.message);
    return null;
  }
};
