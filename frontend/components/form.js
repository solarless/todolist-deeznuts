import { API_URI } from "../config.js";

export function createTodoItemForm() {
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

        axios.post(API_URI, { title });
        location.reload();
    });

    form.append(input);
    form.append(button);

    return form;
}
