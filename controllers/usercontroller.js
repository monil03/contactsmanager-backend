const asyncHandler = require("express-async-handler");
const user = require("../models/usermodel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


//@desc Register a user
//@route POST /api/users/register
//@access public

const registeruser = asyncHandler(async (req, res)=>{
    const {username,email,password} = req.body;
    if(!username || !password || !email)
        {
            res.status(400);
            throw new Error("All fields are mandatory");
        }
    const useravailable = await User.findOne({email});
    if(useravailable)
        {
            res.status(400);
            throw new Error("User already exists");
        }

    const hashedpassword = await bcrypt.hash(password,10);
    console.log(hashedpassword);
    const user = await User.create({
        username,
        email,
        password:hashedpassword,
    });

    if(user)
    {
        res.status(201).json({_id:user.id, email:user.email})
    } else {
        res.status(400);
        throw new Error("User data not valid")
    };
    res.json({message:"Register the user"});
});


//@desc Login a user
//@route POST /api/users/login
//@access public

const loginuser = asyncHandler(async (req, res)=>{
    const {email,password} = req.body;
    if(!email || !password)
    {
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    const user = await User.findOne({email});
    //compare password with hashed password
    if(user && (await bcrypt.compare(password,user.password)))
    {
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email: user.email,
                id:user.id,
            },
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"});
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});


//@desc User Information
//@route POST /api/users/current
//@access private

const currentuser = asyncHandler(async (req, res)=>{
    res.json(req.user);
});


module.exports = {registeruser, loginuser, currentuser};