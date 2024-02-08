const express = require('express')
const studentController = require('../controller/studentController')
const router = express.Router();

    router.post('/createStudent', studentController.createStudent);
    router.get('/getStudent',studentController.getStudent);
    
module.exports = router;