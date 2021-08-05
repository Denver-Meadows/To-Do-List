import * as model from './model.js';
import * as views from './views.js';

const addToDoBtn = document.querySelector('.todo__form__button');
const mainToDoList = document.querySelector('.todo__main__list');
const editToDoList = document.querySelector('.todo__edit__list');
const todoDropDownList = document.querySelector('.todo__dropdown__list');

const editToDo = function(btn) {
  views.renderEditInput(model.getEditTodoText(btn))
};

const saveEdit = function(btn) {
  model.getDataForSaveEdit(btn);
  views.clearTodoListHTML();
  renderTodos(model.state.todos)
}

// Add new todo
addToDoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  model.getAddTodoData();
  views.clearTodoListHTML();
  renderTodos(model.state.todos)
  views.clearTodoFormInput();
});

const renderTodos = function() {
  views.renderNeedTodos(model.state.todos);
  views.renderCompletedTodos(model.state.completedToDo);
};

const init = function() {
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
    if (btn.classList.contains('todo__cancel__edit')) model.cancelEdit(btn);
  });
}

todoDropDownList.addEventListener('change', (e) => {
  views.clearTodoListHTML();
  if (todoDropDownList.value === 'Uncompleted') views.renderNeedTodos(model.state.todos);
  if (todoDropDownList.value === 'Completed') views.renderCompletedTodos(model.state.completedToDo);
  if (todoDropDownList.value === 'All') {
    views.renderNeedTodos(model.state.todos);
    views.renderCompletedTodos(model.state.completedToDo);
  }
})

init();