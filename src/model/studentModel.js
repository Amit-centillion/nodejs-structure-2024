const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    }
});

const studentModel = mongoose.model('student', studentSchema);
module.exports = studentModel;