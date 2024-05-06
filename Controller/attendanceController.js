// controllers/attendanceController.js

const Attendance = require('../Model/Attendance');



exports.checkInOut = async (req, res) => {
  try {
    const { employeeId, madeBy, checkInTime, attendanceStatus, overTime } = req.body;
  
    console.log("Received data:", employeeId, checkInTime, attendanceStatus, madeBy);

    const attendance = new Attendance({
      employeeId,
      checkInTime,
      attendanceStatus,
      madeBy,
      overTime
    });
    await attendance.save();

    res.json({ success: true, message: 'Check-in and check-out recorded successfully.' });
  } catch (error) {
    console.error('Error recording check-in and check-out:', error);
    res.status(500).json({ success: false, message: 'Failed to record check-in and check-out.' });
  }
};



exports.getAttendanceById = async (req, res) => {
  try {
    const attendanceId = req.params.id;

    // Find attendance by ID
    const attendance = await Attendance.findById(attendanceId);

    if (!attendance) {
      // If attendance not found, return 404 status
      return res.status(404).json({ success: false, message: 'Attendance not found.' });
    }

    // If attendance found, return it
    res.json(attendance);
  } catch (error) {
    // If any error occurs, return 500 status
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

exports.getAllAttendance = async (req, res) => {
    try {
      // Retrieve all attendance records
      const allAttendance = await Attendance.find();
  
      res.json(allAttendance);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  };