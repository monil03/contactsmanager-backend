const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactmodel")

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res)=>{
    const contacts = Contact.find({user_id:req.user_id});
    res.status(200).json(contacts);
});


//@desc Create contacts
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req, res)=>{
    console.log(req.body);
    const {name,phone,email} = req.body;
    if(!name || !phone || !email)
        {
            res.status(400);
            throw new Error("All fields are mandatory");
        }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id : req.user.id,
    });
    res.status(201).json(contact);
});


//@desc Get contact for id
//@route GET /api/contacts/:id
//@access private

const getcontactid = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Contact not found");
        }
    res.status(200).json(contact);
});


//@desc Update contact for id
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req, res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Contact not found");
        }
        if(contact.user_id.toString()!==req.iser.id)
        {
            res.status(403);
            throw new Error ("User do not have permission");
        }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );

    res.status(200).json(updatedContact);
});


//@desc Delete contact for id
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req, res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Contact not found");
        }
        if(contact.user_id.toString()!==req.iser.id)
            {
                res.status(403);
                throw new Error ("User do not have permission");
            }

        await Contact.deleteOne();
    res.status(200).json(contact);
});






module.exports = {getContact, createContact, getcontactid, updateContact, deleteContact};