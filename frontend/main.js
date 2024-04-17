import { createAppTitle } from "./components/title.js";
import { createTodoItemForm } from "./components/form.js";
import { createTodoList } from "./components/list.js";

const container = document.getElementById("root");
container.classList.add("container");

container.append(createAppTitle());
container.append(createTodoItemForm());
container.append(createTodoList());
