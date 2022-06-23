export const pageLoad = () => {
    const content = document.querySelector('.content');

    const section = document.createElement('div');
    section.classList.add("container");
    content.appendChild(section);
   
    const app = document.createElement('div');
    app.classList.add('app')
    app.textContent = "TO DO LIST"
    

    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    app.append(form);

    const task = document.createElement("input");
    task.setAttribute("type", "text");
    task.setAttribute("name", "Task");
    task.setAttribute("placeholder", "ADD NEW TASK");
    form.appendChild(task);



    section.appendChild(app);

}



