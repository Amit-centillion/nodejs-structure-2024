const users = require('../model/studentModel')
const { responseMessage } = require('../constant/messages')
const { student,error,status } = responseMessage;

const createStudent = async (req,res)=>{
    try{
        const payloadData = req.body;
        if(payloadData){
            const newUser = new users(payloadData)
            const saveResponse = await newUser.save();
            if(saveResponse){
                return res.status(200).json({
                    status:status.success,
                    message: student.AddStudent,
                    data:newUser
                });
            }else{
                return res.status(500).json({
                    status:status.success,
                    message: error.Error
                })
            }
        }
    }
    catch(error){
        throw error;
    }
} 
const getStudent = async (req,res) => {
    try {
        const findStudent = await users.find();
        if (findStudent) {
            return res.status(200).json({
                status: status.success,
                message: student.GetStudent,
                data: findStudent
            });
        }
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getStudent,
};


const studentController = {
    createStudent,
    getStudent
}

module.exports = studentController;