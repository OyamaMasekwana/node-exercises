const db = require('../db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT e.*, d.department_name, d.location 
      FROM employees e 
      JOIN departments d ON e.department_id = d.department_id
    `);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM employees WHERE employee_id = ?', [id]);
    return rows[0];
  },

  create: async (employee) => {
    const { first_name, last_name, email, phone_number, salary, department_id } = employee;
    await db.query(
      'INSERT INTO employees (first_name, last_name, email, phone_number, salary, department_id) VALUES (?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone_number, salary, department_id]
    );
  },

  remove: async (id) => {
    await db.query('DELETE FROM employees WHERE employee_id = ?', [id]);
  },

  removeAll: async () => {
    await db.query('DELETE FROM employees');
  },

  getByDepartmentLocation: async (location) => {
    const [rows] = await db.query(`
      SELECT e.*, d.department_name, d.location 
      FROM employees e 
      JOIN departments d ON e.department_id = d.department_id
      WHERE d.location = ?
    `, [location]);
    return rows;
  }
};
