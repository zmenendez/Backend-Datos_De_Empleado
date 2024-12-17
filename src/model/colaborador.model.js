import { db }	 from '../config/setupDb.js';

export class ColaboradorModel {
  // Obtener todos los colaboradores
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM COLABORADOR');
    return rows;
  }

  // Obtener un colaborador por ID
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM COLABORADOR WHERE IDCOLABORADOR = ?', [id]);
    return rows[0]; // Devuelve un único resultado o undefined si no existe el ID
  }

  // Crear un nuevo colaborador
  static async create(data) {
    const { nombre, apellido, direccion, edad, profesion, estadoCivil } = data;
    const [result] = await db.query(
      'INSERT INTO COLABORADOR (NOMBRE, APELLIDO, DIRECCION, EDAD, PROFESION, ESTADOCIVIL) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, apellido, direccion, edad, profesion, estadoCivil]
    );
    return result.insertId; // Devuelve el ID del colaborador creado
  }

  // Actualizar un colaborador por ID
  static async update(id, data) {
    const { nombre, apellido, direccion, edad, profesion, estadoCivil } = data;
    const [result] = await db.query(
      'UPDATE COLABORADOR SET NOMBRE = ?, APELLIDO = ?, DIRECCION = ?, EDAD = ?, PROFESION = ?, ESTADOCIVIL = ? WHERE IDCOLABORADOR = ?',
      [nombre, apellido, direccion, edad, profesion, estadoCivil, id]
    );
    return result.affectedRows > 0; // Retorna true si se actualizó
  }

  // Eliminar un colaborador por ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM COLABORADOR WHERE IDCOLABORADOR = ?', [id]);
    return result.affectedRows > 0; // Retorna true si se eliminó
  }
}
