const Client = require('../Model/Client');

// Controller to handle saving client data
exports.saveClient = async (req, res) => {
    try {
        const { hospitalName, service, morningShift, eveningShift, nightShift } = req.body;
        
        // Check if a client with the same hospital name and service already exists
        const existingClient = await Client.findOne({ hospitalName, service });
        if (existingClient) {
            return res.status(400).json({ error: 'Client data already exists' });
        }

        // If no existing client found, proceed to save the new client
        const client = new Client({ hospitalName, service, morningShift, eveningShift, nightShift });
        await client.save();
        res.status(201).json({ message: 'Client data saved successfully' });
    } catch (error) {
        console.error('Error saving client data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        console.error('Error fetching all clients:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        console.error('Error fetching client by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteClientById = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
        console.error('Error deleting client by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}