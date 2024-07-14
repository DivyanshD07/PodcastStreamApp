const express = require ("express");
const app = express();
// const mongoose = require("mongodb");
const { default: mongoose } = require("mongoose");
app.use(express.json());
require("dotenv").config();

const mongoUrl = process.env.mongoUrl;
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

app.post("/post", async(req, res) => {
    console.log(req.body);
    const {data} = req.body;
    try {
        if(data == "divyansh"){
            res.send({status: "ok"});
        }
        else{
            res.send({status:"fucked"});
        }
    } catch(error) {
        res.send({status:"intensely fucked"});
    }
});

require("./models/userDetails");

const User = mongoose.model("UserInfo");

app.post("/register", async(req, res) => {

    const {name, email, phoneNo} = req.body;
    try{
        await User.create({
            uname: name,
            email,
            phoneNo,
        }
        );
        res.send({status:"ok"});
    }catch(error){
        console.log(error);
        res.send({status:"database wala fucked"});
    }
})



module.exports = connectDB;
