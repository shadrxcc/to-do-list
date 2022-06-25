import { addTask, deleteTask } from "./addtask";
import { check } from './checked.js';
import './styles/style.scss';
import { pageLoad } from "./page-load.js";

pageLoad();

const mainList = document.getElementById('ulList');

let myTasks = [];

// Save to local storage
function saveToStorage(todoArr) {
  localStorage.setItem('todos', JSON.stringify(todoArr));
}

// Display Tasks
function displayTasks() {
    mainList.innerHTML = '';
    myTasks.forEach((myTask) => {
      const content = `<input id="checking" type="checkbox"> <span class="description">${myTask.todoName}</span><i id="del" class="trash"> remove</i>`;
  
      const listItem = document.createElement('li');
      listItem.innerHTML = `${content}`;
      listItem.className = 'list-item';
      mainList.appendChild(listItem);

      const checkbox = document.getElementById('checking');
      const trashIcon = document.getElementById('del');

      checkbox.checked = myTask.completed;
      checkbox.addEventListener('change', () => {
        check(checkbox, myTask);
        saveToStorage(myTasks);
      });


    });
  }

  // Add new task with enter icon
  const enterBtn = document.getElementById('submit');
  enterBtn.onclick = () => {
    addTask(myTasks);
    displayTasks();
  };
  
  // Add new task with enter keypress
  const inputList = document.getElementById('todoName');
  inputList.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask(myTasks);
      displayTasks();
    }
  });

    // Get from local storage
    function getFromStorage() {
        const local = JSON.parse(localStorage.getItem('todos'));
        if (local) {
        myTasks = local;
        }
        if (myTasks.length === 0) {
        ulList.innerHTML = '<li class="list-item">To-Do List is empty.</li>';
        } else {
        displayTasks();
        }
    }

    window.onload = getFromStorage();
