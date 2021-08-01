const addToDoBtn = document.querySelector('.todo__form__button');
const completeBtn = document.querySelector('.todo__complete');
const editBtn = document.querySelector('.todo__edit');
const deleteBtn = document.querySelector('.todo__delete');
const mainToDoList = document.querySelector('.todo__main__list');
const todoList = document.querySelector('.todo__list');
const todoText = document.querySelector('.todo__text');
const editToDoList = document.querySelector('.todo__edit__list');


// a better way to render could be looping through the todos and then displaying the HTML.
// Then when i edit a todo, we update the entire todo list and re-render
// save todo's with an id, then edit and update the id


const state = {
  todos: [],
  completedToDo: [],
}

const completeToDo = function(btn) {
  btn.parentNode.classList.toggle('line-through');
  // state.completedToDo.push(btn.closest('.todo__text'));  ***NOT WORKING
};

const editToDo = function(btn) {
  const text = btn.parentElement.innerText;
  // Open a new input box with save and close button
  renderEditInput(text)

  // call function that gets the new text from the edit and replaces the attached btn text.
};

const renderEditInput = function(text) {
  const html = `
      <input type="text" class="todo__edit__input" placeholder="${text}">
      <button class="todo__edit-btn todo__save__edit"><i class="fas fa-save"></i></button>
      <button class="todo__edit-btn todo__cancel__edit"><i class="fas fa-window-close"></i></button>
  `
  editToDoList.insertAdjacentHTML('beforeend', html)
}

const deleteToDo = function(btn) {
  btn.parentElement.remove();
  const removedToDo = btn.parentNode.innerText.trim()

  // Remove todo from state
  state.todos = state.todos.filter(item => item !== removedToDo)
};

const cancelEdit = function(btn) {
  btn.parentElement.remove();
};

const saveEdit = function(btn) {
  const text = document.querySelector('.todo__edit__input').value;

  updateEditedToDo(text)
}

const updateEditedToDo = function(text) {
  console.log(text)
} 

// Add new todo
addToDoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const value = document.querySelector('.todo__form__input').value
  state.todos.push(value)
  renderNewTodo(value)
  console.log(state.todos)
  document.querySelector('.todo__form__input').value = ''
});

// Event bubbling for todo buttons
todoList.addEventListener('click', (e) => {
  const btn = e.target.closest('button')
  if (!btn) return;
  if (btn.classList.contains('todo__delete')) deleteToDo(btn);
  if (btn.classList.contains('todo__edit')) editToDo(btn);
  if (btn.classList.contains('todo__complete')) completeToDo(btn);
});

editToDoList.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return
  if (btn.classList.contains('todo__save__edit')) saveEdit(btn);
  if (btn.classList.contains('todo__cancel__edit')) cancelEdit(btn);
})

const renderNewTodo = function(todo) {
  const html = `
    <li>
      <span class="todo__text">${todo}</span>
      <button class="todo__button todo__delete"><i class="fas fa-trash"></i></button>
      <button class="todo__button todo__edit"><i class="fas fa-edit"></i></button>
      <button class="todo__button todo__complete"><i class="fas fa-check"></i></button>
    </li>
  `
  todoList.insertAdjacentHTML('beforeend', html)
}

