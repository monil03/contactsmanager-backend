const express = require("express");
const {
    registeruser,
    loginuser,
    currentuser
} = require("../controllers/usercontroller");
const validatetoken = require("../middleware/validatetokenhandler");


const router = express.Router();


router.post("/register", registeruser);
router.post("/login", loginuser);
router.post("/current", validatetoken,currentuser);

module.exports = router;