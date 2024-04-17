function createAppTitle() {
    const header = document.createElement("h1");
    header.classList.add("text-center");
    header.textContent = "Приложение TODO";

    return header;
}

function createTodoItemForm() {
    const form = document.createElement("form");
    form.classList.add(
        "input-group",
        "mb-3",
    );

    const input = document.createElement("input");
    input.classList.add("form-control");
    input.placeholder = "Введите новое дело";

    const button = document.createElement("button");
    button.classList.add(
        "btn",
        "btn-primary",
    );
    button.textContent = "Добавить дело";
    button.addEventListener("click", event => {
        event.preventDefault();

        const title = input.value;

        if (title.trim() === "") {
            return;
        }

        axios.post("http://localhost:5000/tasks", { title });
        location.reload();
    });

    form.append(input);
    form.append(button);

    return form;
}

function createTodoList() {
    const list = document.createElement("ul");
    list.id = "list";
    list.classList.add("list-group");

    axios.get("http://localhost:5000/tasks").then(res => {
        for (const task of res.data) {
            list.append(createTodoItem(task._id, task.title, task.isDone));
        }
    });

    return list;
}

function createTodoItem(id, title, isDone) {
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

        axios.patch(`http://localhost:5000/tasks/${id}`);
        location.reload();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", event => {
        event.preventDefault();

        axios.delete(`http://localhost:5000/tasks/${id}`);
        location.reload();
    });

    buttonsBlock.append(updateButton);
    buttonsBlock.append(deleteButton);

    item.append(titleSpan);
    item.append(buttonsBlock);

    return item;
}

const container = document.getElementById("root");
container.classList.add("container");

container.append(createAppTitle());
container.append(createTodoItemForm());
container.append(createTodoList());
