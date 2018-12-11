
const getLocalStorageList = () => JSON.parse(localStorage.getItem('todos') || '[]');
export const getList = () => new Promise(resolve => resolve(getLocalStorageList()));

const addTodoLocalStorage = (todo) => {
  const todos = getLocalStorageList();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const addTodo = (todo) => new Promise(resolve => {
  addTodoLocalStorage(todo);
  resolve('ok')
});


const removeTodoLocalStorage = (todo) => {
  const todos = getLocalStorageList();
  const filteredTodos = todos.indexOf(todo);
  localStorage.setItem('todos', JSON.stringify(filteredTodos));
}

export const removeTodo = (todo) => new Promise(resolve => {
  removeTodoLocalStorage(todo);
  resolve('ok')
});