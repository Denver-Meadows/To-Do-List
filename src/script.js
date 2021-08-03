const addToDoBtn = document.querySelector('.todo__form__button');
const completeBtn = document.querySelector('.todo__complete');
const editBtn = document.querySelector('.todo__edit');
const deleteBtn = document.querySelector('.todo__delete');
const mainToDoList = document.querySelector('.todo__main__list');
const todoList = document.querySelector('.todo__list');
const todoText = document.querySelector('.todo__text');
const editToDoList = document.querySelector('.todo__edit__list');

// Need to keep the completed class when re-rendering on add and edit

const state = {
  todos: [],
  completedToDo: [],
  todoEdit: '',
};

const completeToDo = function(btn) {
  btn.parentNode.classList.toggle('line-through');
  // state.completedToDo.push(btn.closest('.todo__text'));  ***NOT WORKING
};

const editToDo = function(btn) {
  const text = btn.parentElement.innerText;
  console.log(text)
  console.log('click')
  renderEditInput(text)

  state.todoEdit = text
  console.log(state.todoEdit)
};

const renderEditInput = function(text) {
  const html = `
    <div class="todo__edit__list">
      <input type="text" class="todo__edit__input" placeholder="${text}">
      <button class="todo__edit-btn todo__save__edit"><i class="fas fa-save"></i></button>
      <button class="todo__edit-btn todo__cancel__edit"><i class="fas fa-window-close"></i></button>
    </div>
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
 
  state.todos.splice(state.todos.indexOf(state.todoEdit), 1, text) // replace with new text value

  btn.parentElement.remove();
  todoList.innerHTML = '';
  renderNewTodo(state.todos)
}

// Add new todo
addToDoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const value = document.querySelector('.todo__form__input').value
  state.todos.push(value)
  todoList.innerHTML = '';
  renderNewTodo(state.todos)

  document.querySelector('.todo__form__input').value = ''
});

const renderNewTodo = function(todo) {
  if (state.todos.length >= 1) {
    state.todos.forEach(todo => {
      const html = `
        <li>
          <span class="todo__text">${todo}</span>
          <button class="todo__button todo__delete"><i class="fas fa-trash"></i></button>
          <button class="todo__button todo__edit"><i class="fas fa-edit"></i></button>
          <button class="todo__button todo__complete"><i class="fas fa-check"></i></button>
        </li>
      `
      todoList.insertAdjacentHTML('beforeend', html)
    })
  }
};

const init = function() {
  // Event bubbling for todo buttons
  mainToDoList.addEventListener('click', (e) => {
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
  });
}

init();