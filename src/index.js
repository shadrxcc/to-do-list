import { add, removeTask, check, clearDone } from './addtask.js';

import './styles/style.scss';

const showList = document.getElementById('showItem');

let myTasks = [];

const saveToStorage = (taskArray) => {
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function show() {
  showList.innerHTML = "";
  myTasks.forEach((myTask) => {
      const item = `<td class="chec"><input type="checkbox" > </td><td> ${myTask.title} </td><td class="date-rem"> ${myTask.Date} </td><td><button class="delete" id="del" type="button">delete</button></td>`;
                     const myItem = document.createElement('tr');
                     myItem.innerHTML = `${item}`;
                     myItem.classList.add ('myItem');
                     myItem.setAttribute ('id', 'myItem');
                     showList.appendChild(myItem);

                     const checkin = myItem.firstChild;
                     const checkbox = checkin.firstChild;
                     checkbox.checked = myTask.completed;
                     checkbox.addEventListener('change', () => {
                       check(checkbox, myTask);
                       saveToStorage(myTasks);
                     });

                     const remove = myItem.lastChild;
                        remove.addEventListener('click', () => {
                            removeTask(myTasks, myTask);
                            show();
                            window.location.reload();
                        });
                      });
                    }

const enterBtn = document.getElementById('submit');
enterBtn.onclick = () => {
    add(myTasks);
      show();
};

enterBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      add(myTasks);
      show();
    }
});

const removeAll = document.getElementById('all-item');
removeAll.addEventListener('click', () => {
    clearDone(myTasks);
    window.location.reload();
  });

function getFromStorage() {
    const local = JSON.parse(localStorage.getItem('tasks'));
    if (local) {
      myTasks = local;
    }
    if (myTasks.length === 0) {
      showList.innerHTML = '<tr class="list-item"><td class="list-input">To-Do List is empty.</td></tr>';
    } else {
      show();
    }
  }
  window.onload = getFromStorage();