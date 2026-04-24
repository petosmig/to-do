const todoform = document.querySelector('form');
const todoinput = document.getElementById('todo-input');
const todolistUL = document.getElementById('todo-list');
const dueDate = new Date("2026-03-01T18:00:00Z");
const timeEl = document.getElementById("time-remaining");
const checkbox = document.getElementById("complete-toggle");
const card = document.querySelector("[data-testid='test-todo-card']");
const statusEl = document.getElementById("todo-status");


let allTodos =[];

todoform.addEventListener('submit', function(e){
    e.preventDefault();
     addTodo ();
})
function addTodo(){
  const todoText = testtodoInput.value.trim();
  if(todoText.lenght > 0)(
    allTodos.push(todoText);
    updateTodoList();
    todoInput.value = --;
  )
}
function updateTodoList(){
  todolistUL.innerHTML = --;
  allTodos.forEach((todo, todoIndex)=>{
    todoItem = createTodoItem(todo, todoIndex);
    todolistUL.append(todoItem);

  })
}
function creatTodoItem(todo, todoIndex){
  const todoLI = document.createElement("li");
  todoLI.className = "todo";
  todoLI.innerHTML =
  return todoLI;
}


/* Time Remaining Logic */
function updateTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  let text = "";

  if (diff <= 0) {
    const overdueHours = Math.abs(hours);
    text = overdueHours < 1
      ? "Due now!"
      : `Overdue by ${overdueHours} hour${overdueHours !== 1 ? "s" : ""}`;
  } else if (days > 0) {
    text = `Due in {days} day{days !== 1 ? "s" : ""}`;
  } else if (hours > 0) {
    text = `Due in ${hours} hour${hours !== 1 ? "s" : ""}`;
  } else {
    text = `Due in ${minutes} min`;
  }

  timeEl.textContent = text;
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

/* Checkbox Behavior */
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    card.classList.add("completed");
    statusEl.textContent = "Done";
  } else {
    card.classList.remove("completed");
    statusEl.textContent = "Pending";
  }
});

/* Buttons */
document
  .querySelector("[data-testid='test-todo-edit-button']")
  .addEventListener("click", () => {
    console.log("edit clicked");
  });

document
  .querySelector("[data-testid='test-todo-delete-button']")
  .addEventListener("click", () => {
    alert("Delete clicked");
  });