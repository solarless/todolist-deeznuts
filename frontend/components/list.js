import { API_URI } from "../config.js";
import { createTodoItem } from "./todo.js";

export function createTodoList() {
    const list = document.createElement("ul");
    list.classList.add("list-group");

    axios.get(API_URI).then(res => {
        for (const task of res.data) {
            list.append(createTodoItem(task._id, task.title, task.isDone));
        }
    });

    return list;
}
