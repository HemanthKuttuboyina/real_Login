
const User = require("../model/userSchema");
// const cookie = require("cookies");


const {setUser} = require("../services/auth")
async function handleSignUp(req,res) {
    const {FirstName,LastName,UserName,Password} = req.body;

    if(!UserName) return res.status(401).send("alert(Fill All the Details!!);");
    const user = await User.create({
        FirstName,
        LastName,
        UserName,
        Password,
    });

    return res.status(200).redirect("/login");
}





async function handleLogIn(req,res) {
    
    const {UserName,Password} = req.body;

    const detail = await User.findOne({ UserName, Password });
    if(!detail){ 
        return res.status(401).send("alert(User Not found!!);");
    }

    const token = setUser(detail);
    res.cookie("uid",token);

    return res.status(201).redirect("/home");
    
}

module.exports = {handleSignUp,handleLogIn};