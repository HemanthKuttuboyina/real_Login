const express = require("express")
const {handleSignUp,handleLogIn} = require("../controllers/usercontrol")
const router = express.Router();

router.post("/signUp",handleSignUp);
router.post("/logIn",handleLogIn);

module.exports = router;