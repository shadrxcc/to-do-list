import { inputBut } from './form.js';
inputBut();

export const add = (taskArray) => {
    const taskTitle = document.getElementById('title');
    const taskDate = document.getElementById('date');

    if (taskTitle.value  == '' || taskDate.value == "") {
        return;
    }
    const task = {
        title: taskTitle.value,
        Date: taskDate.value,
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

export const clearChecked = (taskArray) => {
    taskArray = taskArray.filter((task) => !task.completed);
    taskArray.forEach((task) => {
      task.index = taskArray.indexOf(task) + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }