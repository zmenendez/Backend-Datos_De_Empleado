import express from 'express';
import { body, param } from 'express-validator';
import {ColaboradorController} from '../controller/colaborador.controller.js';
import { validateFields } from '../middlewares/validateFields.js';

const router = express.Router();

// GET /colaborador - Obtener todos los colaboradores
router.get('/', ColaboradorController.getAll);

// POST /colaborador - Crear un nuevo colaborador
router.post(
  '/',
  [
    body('nombre', 'El nombre es obligatorio y debe ser un string.')
      .notEmpty()
      .isString(),
    body('apellido', 'El apellido es obligatorio y debe ser un string.')
      .notEmpty()
      .isString(),
    body('edad', 'La edad es obligatoria y debe ser un número mayor a 0.')
      .notEmpty()
      .isInt({ gt: 0 }),
    body('direccion', 'La dirección debe ser un string.').optional().isString(),
    body('profesion', 'La profesión debe ser un string.').optional().isString(),
    body('estadoCivil', 'El estado civil debe ser un string.').optional().isString(),
    validateFields, // Middleware para manejar los errores de validación
  ],
  ColaboradorController.create
);

// PUT /colaborador/:id - Actualizar un colaborador
router.put(
  '/:id',
  [
    param('id', 'El ID debe ser un número entero.').isInt(),
    body('nombre', 'El nombre es obligatorio y debe ser un string.')
      .notEmpty()
      .isString(),
    body('apellido', 'El apellido es obligatorio y debe ser un string.')
      .notEmpty()
      .isString(),
    body('edad', 'La edad es obligatoria y debe ser un número mayor a 0.')
      .notEmpty()
      .isInt({ gt: 0 }),
    body('direccion', 'La dirección debe ser un string.').optional().isString(),
    body('profesion', 'La profesión debe ser un string.').optional().isString(),
    body('estadoCivil', 'El estado civil debe ser un string.').optional().isString(),
    validateFields,
  ],
  ColaboradorController.update
);

// DELETE /colaborador/:id - Eliminar un colaborador
router.delete(
  '/:id',
  [
    param('id', 'El ID debe ser un número entero.').isInt(),
    validateFields,
  ],
  ColaboradorController.delete
);

export default router;
