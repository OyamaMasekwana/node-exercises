const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeController');

router.get('/', controller.getAllEmployees);

router.get('/:id', controller.getEmployeeById);

router.post('/', controller.addEmployee);

router.delete('/:id', controller.deleteEmployee);

router.delete('/', controller.deleteAllEmployees);

router.get('/region/south-africa', controller.getEmployeesInSouthAfrica);

module.exports = router;
