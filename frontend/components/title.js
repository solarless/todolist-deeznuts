export function createAppTitle() {
    const header = document.createElement("h1");
    header.classList.add("text-center");
    header.textContent = "Приложение TODO";

    return header;
}
