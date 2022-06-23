function addTask() {
    const task = document.querySelector('.input-list')
    if (task.value === "") {
        return false;
    }
    
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  // task already exist
  tasks.forEach(todo => {
    if (todo.task === task.value) {
      alert("Task already exist!");
      task.value = "";
      return;
    }
})};