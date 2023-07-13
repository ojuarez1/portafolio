const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const ul = document.querySelector("[data-ul]");

menu.addEventListener("click", (e) => {
    e.preventDefault()
    header.classList.toggle("spread");
})

window.addEventListener("click", (e) => {
    const hambuerguer = e.target;
    const confirma = header.classList.contains("spread");
    if (confirma && hambuerguer != menu && hambuerguer != ul) {
        header.classList.toggle("spread");
    }
})