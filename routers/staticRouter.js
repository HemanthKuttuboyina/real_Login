const express = require("express")
const router = express.Router();

router.get("/login",(req,res)=>{
    res.status(200).render("logIn");
});

router.get("/signup",(req,res)=>{
    res.status(200).render("signUp");
});



module.exports = router;
