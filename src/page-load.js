
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
    form.setAttribute("id", "add-todo");
    form.setAttribute("onsubmit", "onFormSubmit()");
    app.append(form);

    const task = document.createElement("input");
    task.setAttribute("type", "text");
    task.setAttribute("name", "Title");
    task.setAttribute("id", "Title");
    task.classList.add('todoName');
    task.setAttribute("placeholder", "ADD NEW Title");
    form.appendChild(task);

    const descrip = document.createElement("input");
    descrip.setAttribute("type", "text");
    descrip.setAttribute("name", "Description");
    descrip.setAttribute("id", "Description");
    descrip.classList.add('todoName');
    descrip.setAttribute("placeholder", "ADD NEW Description");
    form.appendChild(descrip);

    const due = document.createElement("input");
    due.setAttribute("type", "date");
    due.setAttribute("name", "DueDate");
    due.setAttribute("id", "DueDate");
    due.classList.add('todoName');
    due.setAttribute("placeholder", "ADD NEW DueDate");
    form.appendChild(due);

    const prior = document.createElement("input");
    prior.setAttribute("type", "text");
    prior.setAttribute("name", "Priority");
    prior.setAttribute("id", "Priority");
    prior.classList.add('todoName');
    prior.setAttribute("placeholder", "ADD NEW Priority");
    form.appendChild(prior);

    const checklist = document.createElement("input");
    checklist.setAttribute("type", "text");
    checklist.setAttribute("name", "add-to-checklist");
    checklist.setAttribute("id", "add-to-checklist");
    checklist.classList.add('todoName');
    checklist.setAttribute("placeholder", "ADD NEW checklist");
    form.appendChild(checklist);

    const btnn = document.createElement("button");
    btnn.innerHTML = "Click add";
    btnn.classList.add('add-to-checklist');
    form.appendChild(btnn);

    const btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.classList.add('add-todo-button');
    form.appendChild(btn);

    const reset = document.createElement("button");
    reset.setAttribute("type", "reset");
    reset.innerHTML = "reset-button";
    reset.classList.add('reset-button');
    form.appendChild(reset);
    
    

    const add = document.createElement("input");
    add.setAttribute("type", "submit");
    add.setAttribute("id", "submit");
    add.classList.add('submit-button');
    add.setAttribute("value", "Add Task");
    form.appendChild(add);

    const ul = document.createElement("ul")
    ul.setAttribute('id', 'ulList');
    ul.classList.add('projects');
    app.append(ul);

    section.appendChild(app);

}