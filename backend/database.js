const mongoose = require("mongoose");

const DSN = "mongodb://localhost:27017/todolist";

const Task = mongoose.model("Task", {
    title: String,
    isDone: Boolean,
});

async function findAllTasks() {
    return await Task.find();
}

async function createTask(title) {
    await Task.create({ title, isDone: false });
}

async function updateTask(id) {
    const task = await Task.findOne({ _id: id });
    await task.updateOne({ isDone: !task.isDone });
}

async function deleteTask(id) {
    await Task.deleteOne({ _id: id });
}

module.exports = {
    DSN,
    findAllTasks,
    createTask,
    updateTask,
    deleteTask
};
