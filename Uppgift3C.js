function addItem(){
    var ul = document.getElementById("dynamic-list");
    var todo = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.setAttribute('id',todo-list.value);
    li.appendChild(document.createTextNode(todo-list.value));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var todo = document.getElementById("todo-list");
    var item = document.getElementById(todo-list.value);
    ul.removeChild(item);
}
