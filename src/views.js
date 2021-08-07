const editToDoList = document.querySelector('.todo__edit__list');
const todoList = document.querySelector('.todo__list');
const addToDoBtn = document.querySelector('.todo__form__button');
const mainToDoList = document.querySelector('.todo__main__list');
const todoDropDownList = document.querySelector('.todo__dropdown__list');
export const todoEditInput = document.querySelector('.todo__edit__input')

export const renderEditInput = function(text) {
  const html = `
    <div class="todo__edit__list getitman">
      <input type="text" class="todo__edit__input" placeholder="${text}">
      <button class="todo__edit-btn todo__save__edit"><i class="fas fa-save"></i></button>
      <button class="todo__edit-btn todo__cancel__edit"><i class="fas fa-window-close"></i></button>
    </div>
  `
  mainToDoList.insertAdjacentHTML('beforeend', html)
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
};

export const clearTodoListHTML = function() {
  todoList.innerHTML = '';
};

export const clearTodoFormInput = function() {
  document.querySelector('.todo__form__input').value = ''
};

export const mainTodoListBtnHandler = function(handler) {
  mainToDoList.addEventListener('click', (e) => {
    const btn = e.target.closest('button')
    if (!btn) return;
    handler(btn);
  })
};

export const editTodoListBtnHandler = function(handler) {
  //changed editToDoList to main
  mainToDoList.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    handler(btn);
  })
};

export const todoDropDownListHandler = function(handler) {
  todoDropDownList.addEventListener('change', ()=> {
    clearTodoListHTML();
    const value = todoDropDownList.value
    handler(value);
  });
};

export const addToDoBtnHandler = function(handler) {
  addToDoBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    handler();
  })
}