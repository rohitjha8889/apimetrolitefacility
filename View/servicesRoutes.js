// src/routes/servicesRoutes.js
const express = require('express');
const router = express.Router();
const servicesController = require('../Controller/servicesController');

// GET all services
router.get('/getallservices', servicesController.getAllServices);

// POST create a new service
router.post('/addservice', servicesController.createService);


module.exports = router;
