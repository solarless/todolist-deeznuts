const { Sequelize, DataTypes } = require("sequelize");

const database = new Sequelize("sqlite://database.db");

const Task = database.define(
    "Task",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDone: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
);

module.exports = { database, Task };
