const express = require('express');
const router = express.Router();
const attendanceController = require('../Controller/attendanceController');



router.get('/allattendance', attendanceController.getAllAttendance);
router.post('/checkinout', attendanceController.checkInOut);
router.get('/:id', attendanceController.getAttendanceById);
module.exports = router;