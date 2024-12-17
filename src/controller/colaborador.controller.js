import { ColaboradorModel } from '../model/colaborador.model.js';
export class ColaboradorController {
  // GET /colaborador
  static async getAll(req, res) {
    try {
      const colaboradores = await ColaboradorModel.getAll();
      res.status(200).json(colaboradores);
    } catch (err) {
      console.error('Error obteniendo colaboradores:', err.message);
      res.status(500).json({ error: 'Error obteniendo colaboradores.' });
    }
  }

  // POST /colaborador
  static async create(req, res) {
    try {
      const id = await ColaboradorModel.create(req.body);
      res.status(201).json({ message: 'Colaborador creado exitosamente.', id });
    } catch (err) {
      console.error('Error creando colaborador:', err.message);
      res.status(500).json({ error: 'Error creando colaborador.' });
    }
  }

  // PUT /colaborador/:id
  static async update(req, res) {
    const { id } = req.params;
    try {
      const success = await ColaboradorModel.update(id, req.body);
      if (success) {
        res.status(200).json({ message: 'Colaborador actualizado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Colaborador no encontrado.' });
      }
    } catch (err) {
      console.error('Error actualizando colaborador:', err.message);
      res.status(500).json({ error: 'Error actualizando colaborador.' });
    }
  }

  // DELETE /colaborador/:id
  static async delete(req, res) {
    const { id } = req.params;
    try {
      const success = await ColaboradorModel.delete(id);
      if (success) {
        res.status(200).json({ message: 'Colaborador eliminado exitosamente.' });
      } else {
        res.status(404).json({ error: 'Colaborador no encontrado.' });
      }
    } catch (err) {
      console.error('Error eliminando colaborador:', err.message);
      res.status(500).json({ error: 'Error eliminando colaborador.' });
    }
  }
}
