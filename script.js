let count = 0;

document.getElementById("task-form").addEventListener("submit", function(event){
    event.preventDefault();

    let input = document.getElementById("task-input");
    let taskText = input.value;

    let list = document.getElementById("task-list");

    // create new task
    let li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);

    // increment count
    count++;

    document.getElementById("countel").textContent = "Tasks: " + count;

    // clear input
    input.value = "";
});