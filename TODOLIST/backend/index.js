const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require('cors');

const { Todo } = require("./db");


app.use(express.json());
app.use(cors());
app.get("/todos", async(req,res)=>{
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            todos
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching todos",
            error: error.message
        })
    }
})

app.post("/addtodo", async (req, res) => {
    try {
        const { todo } = req.body;
        if(!todo || typeof todo !== 'string') {
            return res.status(400).json({
                message: "Invalid todo text provided"
            });
        }
        const newTodo = await Todo.create({ todo });
        res.status(201).json({
            message: "Todo added successfully",
            todo: newTodo
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding todo",
            error: error.message
        });
    }
});

app.put("/update", async (req,res) =>{
    const{ _id, todo } = req.body;
    try{
        await Todo.findByIdAndUpdate(_id,  {todo});
        res.status(200).json({
            message: "Todo updated successfully"
        })
    }catch(error){   
        res.status(500).json({
            message: "Error updating todo",
            error: error.message
        })
    }
})

app.delete("/delete", async (req,res) =>{
    const { _id } = req.body;
    try{
        await Todo.findByIdAndDelete(_id);
        res.status(200).json({
            message: "Todo deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            message: "Error deleting todo",
            error: error.message
        })
    }
})



app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})