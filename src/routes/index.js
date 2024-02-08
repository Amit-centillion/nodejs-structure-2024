const express = require('express');
const studentRouter =  require('./studentRoute');
const routers = express.Router();

routers.use("/student",studentRouter)

module.exports = routers
