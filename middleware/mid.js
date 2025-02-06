
const {getUser} = require("../services/auth")

async function uservalidate(req,res,next) {
    const userId = req.cookies?.uid;

    if(!userId) return res.status(400).redirect("/login");

    const user = getUser(userId);

    if(!user) return res.status(400).redirect("/login");

    req.user = user;
    next();
}

module.exports = {
    uservalidate
}