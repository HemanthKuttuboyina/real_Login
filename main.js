
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const Userrouter = require("./routers/userRouter")
const Strouter = require("./routers/staticRouter")
const {uservalidate} = require("./middleware/mid")
const mongo = require("mongoose");
const home  = require("./routers/home")



app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded( { extended : false } ))
app.use(cookieParser())
mongo.connect("mongodb://127.0.0.1:27017/Ecommerce").then(()=>console.log("MongoDb Connected"));
app.use("/user",Userrouter);
app.use("/",Strouter);
app.use("/home",uservalidate,home);

app.listen(8000,()=>{
    console.log("Succesfuly server is Running http://localhost:8000/")
})