const users = require('../model/studentModel')
const { responseMessage } = require('../constant/messages')
const { student,error,status,JWT,loginStatus,StatusCode } = responseMessage;
const { passworDycription } = require('../utils/hasPassword');
const { passwordProcess } = require('../utils/comparePassword');
const { generateJWTToken } = require('../utils/generateJWTToken');

const createStudent = async (req,res)=>{
    try{
        const payloadData = req.body;
        let findData = await users.findOne({email:payloadData.email});
        if(findData !== null){
            return res.status(StatusCode.unsuccess).json({
                success:false,
                message:student.StudentAlradyExiest
            })
        }
        else{
            if(payloadData){
                const { hashPassword,slat } = await passworDycription(payloadData.password)
                let updatedPayload = {
                    ...payloadData,
                    password:hashPassword,
                    slat:slat
                }
                const newUser = new users(updatedPayload)
                const saveResponse = await newUser.save();
                if(saveResponse){
                    return res.status(StatusCode.success).json({
                        status:status.success,
                        message: student.AddStudent,
                    });
                }else{
                    return res.status(StatusCode.internallIssue).json({
                        status:status.success,
                        message: error.Error
                    })
                }
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
            return res.status(StatusCode.success).json({
                status: status.success,
                message: student.GetStudent,
                data: findStudent
            });
        }
    } catch (error) {
        throw error;
    }
};
const studentLoign = async(req,res)=>{
    try{
        const payloadData = req.body;
        let findUser = await users.find({email:payloadData.email})
        if(findUser != 0){
            const compareStatus = await passwordProcess(payloadData.password,findUser[0].password)
            if(compareStatus == true){
                const token = generateJWTToken(findUser[0]?._id,JWT.EXPIRY)
                if(token){
                    res.status(StatusCode.success).json({
                        status:true,
                        message:token,
                        token:loginStatus.success
                    })
                }
            }else{
                return res.status(StatusCode.unsuccess).json({
                    status:false,
                    message:student.WrongPassword
                })
            }
        }else{
            res.status(StatusCode.unsuccess).json({
                status:false,
                message:student.studentNotFound
            })
        }
    }
    catch(error){
        throw new error;
    }
}
const studentController = {
    createStudent,
    getStudent,
    studentLoign
}

module.exports = studentController;