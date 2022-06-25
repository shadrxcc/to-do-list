export const pageLoad = () => {
    
    const content = document.querySelector('.content');
      
    const logoText = document.createElement('h1');
    logoText.classList.add('logoText');
    logoText.textContent = "TO DO LIST";
    content.append(logoText);
      
    const error = document.createElement('h1');
    error.classList.add('error');
    error.textContent = "";
    content.append(error);

    const section = document.createElement('div');
    section.classList.add("container");
    content.appendChild(section);

    const app = document.createElement('div');
    app.classList.add('app')

    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("onsubmit", "onFormSubmit()");
    app.append(form);

    const task = document.createElement("input");
    task.setAttribute("type", "text");
    task.setAttribute("name", "todoName");
    task.setAttribute("id", "todoName");
    task.classList.add('todoName');
    task.setAttribute("placeholder", "ADD NEW TASK");
    form.appendChild(task);

    const add = document.createElement("input");
    add.setAttribute("type", "submit");
    add.setAttribute("id", "submit");
    add.classList.add('addInput-button');
    add.setAttribute("value", "Add Task");
    form.appendChild(add)

    const ul = document.createElement("ul")
    ul.setAttribute('id', 'ulList')
    app.append(ul)

    const li = document.createElement("li")
    ul.appendChild(li)

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", "checkbox")
    checkbox.setAttribute("value", "Completed")
    li.appendChild(checkbox)

    section.appendChild(app);

}