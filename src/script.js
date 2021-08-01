const addToDoBtn = document.querySelector('.todo__form__button');
const completeBtn = document.querySelector('.todo__complete');
const editBtn = document.querySelector('.todo__edit');
const deleteBtn = document.querySelector('.todo__delete');
const mainToDoList = document.querySelector('.todo__main__list');
const todoList = document.querySelector('.todo__list')
const todoText = document.querySelector('.todo__text')

const state = {
  todos: [],
  completedToDo: [],
}

const completeToDo = function(btn) {
  btn.parentNode.classList.toggle('line-through');
  // state.completedToDo.push(btn.closest('.todo__text'));  ***NOT WORKING
};

const editToDo = function(btn) {
  console.log(btn.parentElement.innerText) // Get the text from LI
  // Open a new input box with save and close button
};

const deleteToDo = function(btn) {
  btn.parentElement.remove();
  const removedToDo = btn.parentNode.innerText.trim()

  // Remove todo from state
  state.todos = state.todos.filter(item => item !== removedToDo)
};

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

// Add event listener to each btn
// It's better to use event bubbling hear.
// completeBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     state.currentCompleteBtnIndex = index;
//     completeToDo()
//   });
// });
