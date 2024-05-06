const express = require('express');
const router = express.Router();
const employeeController = require('../Controller/employeeController');

router.post('/addemployees', employeeController.addEmployee);
// Define other routes as needed

router.get('/allemployees', employeeController.getAllEmployees);

// Route to get a specific employee by ID
router.get('/employees/:id', employeeController.getSpecificEmployee);
router.delete('/deleteemployees/:id', employeeController.deleteEmployee);

// Route to update an employee by ID
router.put('/updateemployees/:id', employeeController.updateEmployee);

module.exports = router;
