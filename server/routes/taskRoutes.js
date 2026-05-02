const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

// Get tasks

router.get("/", async(req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);

});


// add one task 
router.post("/", async(req,res)=>{
    const task = new Task(req.body);
    await task.save();
    res.json(task);
})

//Delete a particular task

router.delete("/:id", async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message:"Task deleted"});
})

module.exports = router;