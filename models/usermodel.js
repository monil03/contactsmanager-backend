const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    username:{
        type: String,
        required: [true,"Please enter username"],
    },
    email:{
        type: String,
        required: [true,"Please enter email"],
        unique:[true,"Email address already exists "],
    },
    username:{
        type:String,
        required: [true,"Please enter password"],
    }
},
{
    timestamps:true,
});


module.exports = mongoose.model("User",userschema)