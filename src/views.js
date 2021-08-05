const editToDoList = document.querySelector('.todo__edit__list');
const todoList = document.querySelector('.todo__list');

export const renderEditInput = function(text) {
  
  const html = `
    <div class="todo__edit__list">
      <input type="text" class="todo__edit__input" placeholder="${text}">
      <button class="todo__edit-btn todo__save__edit"><i class="fas fa-save"></i></button>
      <button class="todo__edit-btn todo__cancel__edit"><i class="fas fa-window-close"></i></button>
    </div>
  `
  editToDoList.insertAdjacentHTML('beforeend', html)
};

export const todoHTML = function(todo) {
  return `
    <li>
      <span class="todo__text">${todo}</span>
      <button class="todo__button todo__delete"><i class="fas fa-trash"></i></button>
      <button class="todo__button todo__edit"><i class="fas fa-edit"></i></button>
      <button class="todo__button todo__complete"><i class="fas fa-check"></i></button>
    </li>
  `
};

export const completedTodoHTML = function(todo) {
  return `
    <li class="line-through">
      <span class="todo__text">${todo}</span>
      <button class="todo__button todo__delete"><i class="fas fa-trash"></i></button>
      <button class="todo__button todo__edit"><i class="fas fa-edit"></i></button>
      <button class="todo__button todo__complete"><i class="fas fa-check"></i></button>
    </li>
  `
};

export const renderNeedTodos = function(data) {
  if (data.length >= 1) {
    data.forEach(todo => {
      const html = todoHTML(todo)
      todoList.insertAdjacentHTML('beforeend', html)
    })
  }
};

export const renderCompletedTodos = function(data) {
  if (data.length >= 1) {
    data.forEach(todo => {
      const html = completedTodoHTML(todo)
      todoList.insertAdjacentHTML('beforeend', html)
    })
  }
}