const addToDoBtn = document.querySelector('.todo__form__button');
const completeBtn = document.querySelectorAll('.todo__complete');
const editBtn = document.querySelector('.todo__edit');
const deleteBtn = document.querySelector('.todo__delete');
const mainToDoList = document.querySelector('.todo__main__list');
const todoList = document.querySelector('.todo__list')

const state = {
  currentCompleteBtnIndex: '',
}

const completeToDo = function(btn) {
  // add line-through class to current selected complete-btn
  // completeBtn[state.currentCompleteBtnIndex].parentNode.classList.toggle('line-through')
  btn.parentNode.classList.toggle('line-through')
};

const editToDo = function() {

};

const deleteToDo = function() {

};

todoList.addEventListener('click', (e) => {
  const btn = e.target.closest('button')
  if (!btn) return;
  if (btn.classList.contains('todo__delete')) console.log('delete that');
  if (btn.classList.contains('todo__edit')) console.log('edit that');
  if (btn.classList.contains('todo__complete')) completeToDo(btn);
})

// Add event listener to each btn
// It's better to use event bubbling hear.
// completeBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     state.currentCompleteBtnIndex = index;
//     completeToDo()
//   });
// });
