const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employees',
    required: true
  },
  checkInTime: {
    type: String
    
  },

  attendanceStatus:{
    type: String
  },

  overTime:{
    type: Number
  },


  madeBy: {
    type: String, 
  }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
