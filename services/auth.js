const jwt = require("jsonwebtoken");
const secureKey = "Hemanth@143";

async function setUser(user) {
    const payload = {
        _id: user._id,
        UserName: user.UserName,
    }
    return jwt.sign(payload,secureKey);
}

async function getUser(token) {
    if (!token || typeof token !== "string") {
        console.error("Invalid token:", token); // Debugging line
        return null;
    }
    try {
        return jwt.verify(token, secureKey);
    } catch(err){
        console.error("JWT verification failed:", err.message);
        return null;
    }
}

module.exports = {setUser,getUser};