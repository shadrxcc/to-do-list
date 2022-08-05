/**
 * @jest-environment jsdom
 */

import {add, removeTask, check, clearDone} from '../src/addtask.js';

describe('add task to the list', () =>{
  document.body.innerHTML = '<input type="text" name="title" id="title" class="todoName" placeholder="ADD NEW TODO LIST">';
  document.body.innerHTML = '<input type="date" name="date" id="date" class="todoName">';
  const taskTitle = document.getElementById('title');
  const taskDate = document.getElementById('date');
  
  taskTitle.value = 'Going to church';
  taskDate.value = '2022-08-10';
  const task = [];
  test('add three task to list', () =>{
    add(task);
    expect(task).toHaveLength(2);
  });

  test('Check title of first task', () => {
    expect(task[0].title).toBe('Going to church');
  });

  test('Check date of first task', () => {
    expect(task[0].Date).toBe('2022-08-10');
  });

  test('Check status of first task', () => {
    expect(task[0].completed).toBe(false);
  });
});

describe('delete task from list', () => {
  const task = [
    {
      title: "tunde",
      Date: "2022-08-10",
      completed: false,
      index: 1,
    },
    {
      title: 'tunde',
      Date: '2022-08-10',
      completed: false,
      index: 2,
    },
  ];
  test('delete task with index 1', () => {
    removeTask(task,1);
    expect((task)).toHaveLength(2);
  });
});

describe('check task status tobe true of false', () => {
  document.body.innerHTML = '<input type="checkbox" id="checkbox">';
  const checkbox = document.getElementById('checkbox');
  const task = [
    {
      title: 'seun',
      Date: '2022-08-10',
      completed: false,
      index: 1,
    },

    {
      title: 'seun',
      Date: '2022-08-10',
      completed: false,
      index: 1,
    },

  ];

  test('change checkbox to true', () => {
    checkbox.checked = true;
    check(checkbox, task[1]);
    expect(task[1].completed).toBeTruthy();
  });

  test('Change completed status to false', () => {
    checkbox.checked = false;
    check(checkbox, task[1]);
    expect(task[1].completed).toBeFalsy();
  });
});

describe('clear done tasks from list', () => {
  let tasks = [
    {
      title: 'seun',
      Date: '2022-08-10',
      completed: true,
      index: 1,
    },

    {
      title: 'seun',
      Date: '2022-08-10',
      completed: false,
      index: 2,
    },
    {
      title: 'seun',
      Date: '2022-08-10',
      completed: true,
      index: 3,
    },

  ];

  tasks = tasks.filter((task) => !task.completed);

  test('Check array length after clearing completed tasks', () => {
    clearDone(tasks);
    expect(tasks).toHaveLength(1);
  });

  test('Update index after clearing completed tasks', () => {
    clearDone(tasks);
    expect(tasks[0].index).toBe(1);
  });
});