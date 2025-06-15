// Selectors
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Functions
const generateTemplate = (todo) => {
  const html = `
        <li class="list-group-item d-flex align-items-center">
            <span>${todo}</span>
            <div class="icons">
              <i class="fa-solid fa-check"></i>
              <i class="fa-solid fa-trash delete"></i>
            </div>
        </li>
    `;
  list.innerHTML += html;
};

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// Event Listeners
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const listItem = e.target.closest("li.list-group-item");
    if (listItem) {
      listItem.remove();
    }
    return;
  }
  if (e.target.classList.contains("fa-check")) {
    const todoItem = e.target.closest("li.list-group-item");
    const todoText = todoItem.querySelector("span");
    todoText.style.textDecoration =
      todoText.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
    todoText.style.opacity = todoText.style.opacity === "0.5" ? "1" : "0.5";
    todoItem.style.backgroundColor =
      todoItem.style.backgroundColor === "rgb(148, 134, 173)" ? "" : "#9486ad";
    todoItem.style.borderColor =
      todoItem.style.borderColor === "rgb(148, 134, 173)" ? "" : "#9486ad";
  }
});

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
