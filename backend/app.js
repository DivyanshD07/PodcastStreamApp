const express = require ("express");
const app = express();
// const mongoose = require("mongodb");
const { default: mongoose } = require("mongoose");
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ajknfkjanfenie[](){aefjnnfedkjnd@!$@#$%^&*()jkgrfsnakj<>?123654789";



const mongoUrl = process.env.mongoUrl;

if(!mongoUrl){
    console.log("url not defined");
    process.exit(1);
}


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
        return conn;
    }
    catch (error) {
        console.error("Database Error", error);
        process.exit(1);
    }
};


connectDB().then((conn) => {
    app.listen(5000, ()=> {
        console.log("Server started successfully on port 5000");
        console.log(conn.connections[0].readyState);
    })
})

require("./models/userDetails");

const User = mongoose.model("UserInfo");

app.post("/register", async(req, res) => {

    const {fname, lname, email, password} = req.body;
    const encyptPassword = await bcrypt.hash(password, 10);

    try{
        const oldUser = await User.findOne({ email });
        if(oldUser) {
            return res.send({error: "User exists"});
        }

        await User.create({
            fname,
            lname,
            email,
            password: encyptPassword,
        }
        );
        res.send({status: "ok"});
    }catch(error){
        console.log(error);
        res.send({status: error});
    }
})

app.post("/login", async(res, req) => {
    const [email, password] = req.body;
    const user = await User.findOne({ email });
    if(!user) {
        return res.json({ error : "User not found" });
    }
    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, JWT_SECRET);

        if(res.status(201)) { //201 means request is successful
            return res.json({ status: "ok", data: token});
        } else {
            return res.json({ status: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
});



module.exports = connectDB;
