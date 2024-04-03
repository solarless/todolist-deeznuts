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
        const list = document.getElementById("list");
        const title = input.value;

        if (title.trim() === "") {
            return;
        }

        const item = createTodoItem(title);

        list.append(item);

        input.value = "";
    });

    form.append(input);
    form.append(button);

    return form;
}

function createTodoList() {
    const list = document.createElement("ul");
    list.id = "list";
    list.classList.add("list-group");

    return list;
}

function createTodoItem(title) {
    const item = document.createElement("li");
    item.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between"
    );

    const titleBlock = document.createElement("div");
    const titleSpan = document.createElement("span");
    titleSpan.append(title);

    const checkbox = document.createElement("input");
    checkbox.classList.add(
        "form-check-input",
        "me-3",
    );
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        titleSpan.classList.toggle("text-decoration-line-through");
    });

    titleBlock.append(checkbox);
    titleBlock.append(titleSpan);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-close");
    deleteButton.addEventListener("click", event => {
        event.preventDefault();
        const list = document.getElementById("list");
        list.removeChild(item);
    });

    item.append(titleBlock);
    item.append(deleteButton);

    return item;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.classList.add("container");

    container.append(createAppTitle());
    container.append(createTodoItemForm());
    container.append(createTodoList());

    document.body.append(container);
});
