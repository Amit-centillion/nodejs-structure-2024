const express = require('express')
const studentController = require('../controller/studentController');
const {jwtAuthorization} = require('../middleware/authmiddleware');
const router = express.Router();

    router.post('/createStudent', studentController.createStudent);
    router.get('/getStudent',jwtAuthorization,studentController.getStudent);
    router.post('/login',studentController.studentLoign);

module.exports = router;