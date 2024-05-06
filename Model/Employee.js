const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true
  },
  employeePhone: {
    type: Number,
    required: true,
    unique: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  attendancePermission: {
    type: String,
    required: true
  },
  uniformPermission: {
    type: String,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;


// Testing Json

// {
//     "employeeName": "Rohit Kumar Jha",
//     "employeePhone": 9508299279,
//     "hospitalName": "Kshetrapal",
//     "service":"Housekeeping",
//     "attendancePermission":"YES",
//     "uniformPermission":"No"
// }