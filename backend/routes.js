const { Task } = require("./database");

const express = require("express");

const router = express.Router();

router.post("/tasks", (req, res) => {
    Task.create(req.body).then(task => {
        res.status(201).end();
    });
});

router.get("/tasks", (req, res) => {
    Task.findAll().then(tasks => {
        res.json(tasks);
    });
});

router.patch("/tasks/:id", (req, res) => {
    Task.findByPk(+req.params.id).then(task => {
        task.update({ isDone: !task.isDone }).then(() => {
            res.status(200).end();
        });
    });
});

router.delete("/tasks/:id", (req, res) => {
    Task.destroy({ where: { id: +req.params.id } }).then(() => {
        res.status(204).end();
    });
});

module.exports = { router };
