const {constants} = require("../constants")
const errorhandler = (err,req,res,next) => {

    const statuscode = res.statusCode? res.statusCode : 500; 
    
    switch(statuscode)
    {
        case constants.VALIDATION_ERROR:
            res.json({
                        title:"Validation failed",
                        message:err.message, 
                        stackTrace: err.stack})
            break;

        case constants.NOT_FOUND:
            res.json({
                title:"Not found",
                message:err.message, 
                stackTrace: err.stack})
            break;

        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message, 
                stackTrace: err.stack})
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message:err.message, 
                stackTrace: err.stack})
            break;

        default:
            console.log("No error. All good !");
            break;

    }

};

module.exports = errorhandler;