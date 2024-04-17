import { API_URI } from "../config.js";

export function createTodoItem(id, title, isDone) {
    const item = document.createElement("li");
    item.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
    );

    const titleSpan = document.createElement("span");
    if (isDone) {
        item.classList.add("list-group-item-success")
    }
    titleSpan.append(title);

    const buttonsBlock = document.createElement("div");
    buttonsBlock.classList.add("btn-group");

    const updateButton = document.createElement("button");
    updateButton.textContent = isDone ? "Начать заново" : "Завершить";
    updateButton.classList.add("btn", "btn-primary");
    updateButton.addEventListener("click", event => {
        event.preventDefault();

        axios.patch(`${API_URI}/${id}`);
        location.reload();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", event => {
        event.preventDefault();

        axios.delete(`${API_URI}/${id}`);
        location.reload();
    });

    buttonsBlock.append(updateButton);
    buttonsBlock.append(deleteButton);

    item.append(titleSpan);
    item.append(buttonsBlock);

    return item;
}
