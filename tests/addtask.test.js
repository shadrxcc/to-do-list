/**
 * @jest-environment jsdom
 */

import {add} from '../src/addtask.js';

describe('add task to the list', () =>{
  document.body.innerHTML = '<input type="text" placeholder="Add task tittle" id="title">';
  document.body.innerHTML = '<input type="date" placeholder="Add task date" id="date">';
  const taskTitle = document.getElementById('title');
  const taskDate = document.getElementById('date');
  taskTitle.value = "Tunde";
  taskDate.value = "08/04/2022";
  const task = [];

  test("add three task to list", () =>{
    add(task);
    add(task);
    add(task);
    expect(task).toHaveLength(3);
  });

  test('Check title and date of first task', () => {
    expect(task[0].description).toBe('Tunde', "08/04/2022");
  });

  test('Check status of first task', () => {
    expect(task[0].completed).toBe(false);
  });

  test('Check index of second task', () => {
    expect(task[1].index).toBe(2);
  });
});