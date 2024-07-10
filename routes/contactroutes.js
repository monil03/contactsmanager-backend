const express = require("express");
const router = express.Router();

const {
    getContact,
    createContact,
    getcontactid,
    deleteContact,
    updateContact
} = require("../controllers/contactcontroller");
const validatetoken = require("../middleware/validatetokenhandler");

router.use(validatetoken);
router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getcontactid).put(updateContact).delete(deleteContact);





module.exports = router;