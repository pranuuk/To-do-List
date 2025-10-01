function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    
    let span = document.createElement("span");
    span.textContent = task;
    span.onclick = function() {
        span.classList.toggle("Completed!");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✅";
    deleteBtn.onclick = function() {
        li.style.opacity = "0";
        setTimeout(() => li.remove(), 300);
    };

    li.append(span);
    li.append(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

}