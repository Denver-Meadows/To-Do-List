export const state = {
  todos: [],
  completedToDo: [],
  todoEdit: '',
  test: 'testing',
};

export const completeToDo = function(btn) {
  const text = btn.parentElement.innerText
  // Move completed items from todos to completedToDo and vice-versa
  if (!btn.parentElement.classList.contains('line-through')) {
    btn.parentNode.classList.toggle('line-through'); 
    state.todos = state.todos.filter(item => item !== text) // remove from todos
    state.completedToDo.push(text)
  } else {
    btn.parentNode.classList.toggle('line-through'); 
    state.todos.push(text)
    state.completedToDo = state.completedToDo.filter(item => item !== text);
  };
};

export const deleteToDo = function(btn) {
  btn.parentElement.remove();
  const removedToDo = btn.parentNode.innerText.trim()

  // Remove todo from state
  state.todos = state.todos.filter(item => item !== removedToDo);
  state.completedToDo = state.completedToDo.filter(item => item !== removedToDo)
};

export const getEditTodoText = function (btn) {
  const text = btn.parentElement.innerText;
  state.todoEdit = text
  return text
}