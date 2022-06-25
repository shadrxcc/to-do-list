export const addTask = (todoArr) => {
    const todoName = document.getElementById('todoName');
    if (todoName.value === '') {
      return;
    }
    const todo = {
    todoName: todoName.value,
      completed: false,
      index: todoArr.length + 1,
    };
    todoArr.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoArr));
    todoName.value = '';
  }

  export const deleteTask = (todoArr, delTodo) => {
    todoArr = todoArr.filter((todo) => todo.index !== delTodo.index);
    todoArr.forEach((todo) => {
        todo.index = todoArr.indexOf(todo) + 1;
    });
    localStorage.setItem('todo', JSON.stringify(todoArr));
  }
