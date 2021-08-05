import * as model from './model.js';
import * as views from './views.js';

const addToDoBtn = document.querySelector('.todo__form__button');
const mainToDoList = document.querySelector('.todo__main__list');
const todoList = document.querySelector('.todo__list');
const editToDoList = document.querySelector('.todo__edit__list');
const todoDropDownList = document.querySelector('.todo__dropdown__list');

const editToDo = function(btn) {
  const text = model.getEditTodoText(btn);
  views.renderEditInput(text)
};

const cancelEdit = function(btn) {
  btn.parentElement.remove();
};

const saveEdit = function(btn) {
  const text = document.querySelector('.todo__edit__input').value;
 
  model.state.todos.splice(model.state.todos.indexOf(model.state.todoEdit), 1, text) // replace with new text value

  btn.parentElement.remove();
  todoList.innerHTML = '';
  renderTodos(model.state.todos)
}

// Add new todo
addToDoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const value = document.querySelector('.todo__form__input').value
  model.state.todos.push(value)
  todoList.innerHTML = '';
  renderTodos(model.state.todos)

  document.querySelector('.todo__form__input').value = ''
});

const renderTodos = function() {
  renderNeedTodos();
  renderCompletedTodos();
};

const renderNeedTodos = function() {
  if (model.state.todos.length >= 1) {
    model.state.todos.forEach(todo => {
      const html = views.todoHTML(todo)
      todoList.insertAdjacentHTML('beforeend', html)
    })
  }
};

const renderCompletedTodos = function() {
  if (model.state.completedToDo.length >= 1) {
    model.state.completedToDo.forEach(todo => {
      const html = views.completedTodoHTML(todo)
      todoList.insertAdjacentHTML('beforeend', html)
    })
  }
}



const init = function() {

  console.log(model.state.test)
  // Event bubbling for todo buttons
  mainToDoList.addEventListener('click', (e) => {
    const btn = e.target.closest('button')
    if (!btn) return;
    if (btn.classList.contains('todo__delete')) model.deleteToDo(btn);
    if (btn.classList.contains('todo__edit')) editToDo(btn);
    if (btn.classList.contains('todo__complete')) model.completeToDo(btn);
  });

  editToDoList.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return
    if (btn.classList.contains('todo__save__edit')) saveEdit(btn);
    if (btn.classList.contains('todo__cancel__edit')) cancelEdit(btn);
  });
}

todoDropDownList.addEventListener('change', (e) => {
  todoList.innerHTML = '';
  if (todoDropDownList.value === 'Uncompleted') renderNeedTodos();
  if (todoDropDownList.value === 'Completed') renderCompletedTodos();
  if (todoDropDownList.value === 'All') {
    renderNeedTodos();
    renderCompletedTodos();
  }
})

init();