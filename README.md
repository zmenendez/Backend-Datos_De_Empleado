# Sistema de Gestión de Colaboradores - Backend

Backend para gestionar colaboradores, construido con **Node.js**, **Express**, y **MySQL**. Protege los endpoints con **JWT** y valida datos con **Express Validator**.

---

## **Configuración del Proyecto**

### 1. Clonar el Repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
```
### 2. Instalar Dependencias
```bash
cd <nombre_del_proyecto>
npm install
```
### 3. Configurar el entorno
#### Modifica el archivo .env basado en el ejemplo proporcionado:
```bash
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=admin
DB_NAME=colaboradores_db
JWT_SECRET=tu_clave_secreta
```
### 4. Crear la base de datos
#### Asegúrate de que tu servidor MySQL esté en funcionamiento. El proyecto creará automáticamente la base de datos si no existe.

# Ejecuta el proyecto
### Inicia el servidor
```bash
npm run dev
```
El servidor estará disponible en http://localhost:3001.

Al iniciar, se generará un token JWT válido por 1 hora. Este token aparecerá en la consola:
```bash
Token generado: <TOKEN_GENERADO>
```
Copia este token para las pruebas en Postman

# Estructura del proyecto
```bash
src/
├── app.js                     # Configuración principal de la aplicación
├── routes/
│   └── colaborador.routes.js  # Rutas de colaboradores
├── controller/
│   └── colaborador.controller.js # Lógica de negocio
├── middlewares/
│   └── validateToken.js       # Middleware para validar JWT
│   └── validateFields.js      # Middleware para validar datos
├── helper/
│   └── generateToken.js       # Generador de token JWT
├── config/
│   └── setupDb.js             # Configuración de la base de datos
├── model/
│   └── colaborador.model.js    # Modelo de datos para colaboradores
└── index.js                   # Punto de entrada del servidor
```
¡Gracias por probar este proyecto! 🚀
