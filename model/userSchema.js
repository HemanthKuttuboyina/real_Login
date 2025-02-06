
const mongo = require("mongoose");


const UserLogin = new mongo.Schema(
    {
        FirstName:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        },
        UserName:{
            type:String,
            required:true,
            unique:true
        },
        Password:{
            type:String,
            required:true,
        }
    }
);

const User = mongo.model("users",UserLogin);

module.exports = User;