const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const taskroutes = require("./routes/taskRoutes")

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err));

app.use("/tasks",taskroutes);

app.get("/",(req,res)=>{
    res.send("API is running...");
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

