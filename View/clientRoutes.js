const express = require('express');
const router = express.Router();
const clientController = require('../Controller/clientController');

// Route to save client data
router.post('/addclient', clientController.saveClient);
router.get('/allclients', clientController.getAllClients);
router.get('/getclient/:id', clientController.getClientById);
router.delete('/deleteclient/:id', clientController.deleteClientById);


module.exports = router;
