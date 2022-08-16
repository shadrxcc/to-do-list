  export const add = (taskArray) => {
    const taskTitle = document.getElementById('title');
    const taskDate = document.getElementById('date');

   
    if (taskTitle.value  === "") {
      const message = document.getElementById("messagedrop");
      message.innerHTML = "Please Input a name Correctly";
        return;
    }
    if (taskDate.value === "") {
      const message = document.getElementById("messagedrop");
      message.innerHTML = "Please Input a date Correctly";
        return;
    }
    const task = {
        title: taskTitle.value,
        date: taskDate.value,
        completed: false,
        index: taskArray.length + 1,
    };

    taskArray.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    taskTitle.value = '';
    taskDate.value = '';
  }

  export const removeTask = (taskArray, remTask) => {
    taskArray = taskArray.filter((task) => task.index !== remTask.index);
    taskArray.forEach((task) => {
      task.index = taskArray.indexOf(task) + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }

  export const check = (checkbox, tasklist) => {
    if (checkbox.checked) {
      tasklist.completed = true;
    } else {
      tasklist.completed = false;
    }
  }

  export const clearDone = (taskArray) => {
    taskArray = taskArray.filter((task) => !task.completed);
    taskArray.forEach((task) => {
      task.index = taskArray.indexOf(task) + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }