const responseMessage = {
    student:{
        AddStudent:"student added successfully",
        GetStudent:"student get successfully",
        WrongPassword:"password is wrong!",
        studentNotFound:"student not exiest!"
    },
    error:{
        Error:"somthing went wrong"
    },
    status:{
        success:'success'
    },
    loginStatus:{
        success:'login successful'
    },
    JWT: {
        SECRET: "SECRET",
        EXPIRY: "7d",
        FORGET_TOKEN_EXPIRY: "10m",
        ACCOUNT_ACTIVATION: "SECRET",
      },
    Token:{
        TokenNotFound:"token not found.",
        TokenInvalid:"token is invalid.",
        TokenExpire:"token is expire"
    }
}
const response = {
    responseMessage
}
module.exports = response;