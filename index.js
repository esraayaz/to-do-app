// Selectors
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

// Functions
const generateTemplate = (todo) => {
  const html = `
    <ul class="list-group todos">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>
    </ul>
    `;
  list.innerHTML += html;
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
    e.target.parentElement.remove();
  }
});
