import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Obtener el token del encabezado Authorization
  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Validar el token con la clave secreta
    req.user = decoded; // Guardar los datos decodificados en la solicitud
    next(); // Continuar con la siguiente función
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};

export default verifyToken;
