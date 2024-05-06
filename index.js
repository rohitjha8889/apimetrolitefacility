// server.js
const express = require('express');
const connectDB = require('./Database/connect');
const servicesRoutes = require('./View/servicesRoutes');
const clientRoutes = require('./View/clientRoutes')
const employeeRoutes = require('./View/employeeRoutes')
const attendanceRoutes = require('./View/attendanceRoutes')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;
const bodyParser = require('body-parser');


// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// app.use(express.static('attendanceImage'));
app.use('/attendanceImage', express.static('attendanceImage'));
// Routes
app.use('/service', servicesRoutes);
app.use('/client' ,clientRoutes);
app.use('/employee', employeeRoutes);
app.use('/attendance', attendanceRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
