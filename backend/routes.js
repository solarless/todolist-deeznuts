const express = require("express");
const {
    findAllTasks,
    createTask,
    updateTask,
    deleteTask
} = require("./database");

const  router = express.Router();

router.post("/tasks", async (req, res) => {
    const title = req.body.title;
    await createTask(title);
    res.status(201).end();
});

router.get("/tasks", async (req, res) => {
    const tasks = await findAllTasks();
    res.json(tasks);
});

router.patch("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    await updateTask(id);
    res.status(200).end();
});

router.delete("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    await deleteTask(id);
    res.status(204).end();
});

module.exports = { router };
