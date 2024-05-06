const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    hospitalName: {
        type: String,
        required: true
    },
    service: {
        type: String, // Storing the service name directly
        required: true
    },
    morningShift: {
        type: String, // Field for morning shift
        
    },
    eveningShift: {
        type: String, // Field for evening shift
        
    },
    nightShift: {
        type: String, // Field for night shift
        
    }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
