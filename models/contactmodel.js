const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");


const contactschema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type: String,
        required: [true,"Please add contact name"],
    },
    email:{
        type: String,
        required: [true,"Please add contact email"],
    },
    phone:{
        type: String,
        required: [true,"Please add contact number"],
    }
},
{
    timestamps:true,
});

module.exports = mongoose.model("Contact",contactschema);