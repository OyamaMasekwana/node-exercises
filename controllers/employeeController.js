const Employee = require('../models/employeeModel');

module.exports = {
  getAllEmployees: async (req, res) => {
    const data = await Employee.getAll();
    res.json(data);
  },

  getEmployeeById: async (req, res) => {
    const data = await Employee.getById(req.params.id);
    res.json(data);
  },

  addEmployee: async (req, res) => {
    await Employee.create(req.body);
    res.json({ message: '✅ Employee added successfully' });
  },

  deleteEmployee: async (req, res) => {
    await Employee.remove(req.params.id);
    res.json({ message: '🗑️ Employee deleted successfully' });
  },

  deleteAllEmployees: async (req, res) => {
    await Employee.removeAll();
    res.json({ message: '🧹 All employees removed' });
  },

  getEmployeesInSouthAfrica: async (req, res) => {
    const data = await Employee.getByDepartmentLocation('South Africa');
    res.json(data);
  }
};
