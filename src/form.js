export const inputBut = () => {
    const content = document.querySelector('.app');
    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("id", "add-todo");
    form.classList.add('form');
    form.setAttribute("onsubmit", "event.preventDefault()");
    content.append(form);

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("id", "title");
    title.classList.add('todoName');
    title.setAttribute("placeholder", "ADD NEW TODO LIST");
    form.append(title);

    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("name", "date");
    date.setAttribute("id", "date");
    date.classList.add('todoName');
    form.append(date);

    const sub = document.createElement("input");
    sub.setAttribute("type", "submit");
    sub.setAttribute("name", "submit");
    sub.setAttribute("id", "submit");
    sub.classList.add('submit-button');
    form.append(sub);
}
