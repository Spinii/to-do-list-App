const toDoApp = document.getElementById("toDoApp");
const toDoInput = document.getElementById("toDoInput");
const addBtn = document.getElementById("btn1");
let taskCounter = 0;
let editTask;
let createTasksDiv;


addBtn.addEventListener("click", event => {

    event.preventDefault();

    const task = toDoInput.value;

    if(task){
        if(!createTasksDiv){

            createTasksDiv =  document.createElement("div");
        
            createTasksDiv.classList.add("tasks");

            toDoApp.append(createTasksDiv);
        }

        createTask(task);
    }
    
})


function createTask(task){
    taskCounter++;
    let checkTask = document.createElement("input");
    checkTask.setAttribute("type", "checkbox");

    checkTask.addEventListener("change", () => {
        if(checkTask.checked){
            addTask.classList.remove("task");
            addTask.classList.add("finished");
            editTask.style.opacity = "0";
        }
        else{
            addTask.classList.remove("finished");
            addTask.classList.add("task");
            editTask.style.opacity = "1";
            
        }
    })

    const addTask = document.createElement("p");
    const editTask = document.createElement("div");
    const removeTask = document.createElement("div");

    addTask.textContent = task;
    taskText = addTask.textContent;
    editTask.textContent = "Edit";
    removeTask.textContent = "X";

    addTask.classList.add("task");


    editTask.classList.add("editBtn");

    editTask.addEventListener("click", () => {
        checkTask.style.display = "none";
        editTask.style.display = "none";
        addTask.style.display = "none";
        const editText = document.createElement("input")
        editText.style.padding = ".6rem 4rem"
        editText.style.borderRadius = "10px"
        editText.style.border = "1px solid black"
        editText.style.width = "100%";
        editText.style.fontSize = "1.1rem"
        editText.value = addTask.textContent;
        taskDiv.insertBefore(editText, editTask);
        const finishBtn = document.createElement("button");
        finishBtn.classList.add("editBtn");
        finishBtn.textContent = "Finish";
        taskDiv.insertBefore(finishBtn, editTask);
        editText.focus(); 
        finishBtn.addEventListener("click", () => {
            addTask.textContent = editText.value;
            addTask.style.display = "block";
            editText.remove();
            finishBtn.remove();
            editTask.style.display = "block";
            checkTask.style.display = "block";
        });

    });

    removeTask.classList.add("removeBtn");

    

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("tasksDiv");
    taskDiv.appendChild(checkTask);
    taskDiv.appendChild(addTask);
    taskDiv.appendChild(editTask);
    taskDiv.appendChild(removeTask);

    createTasksDiv.appendChild(taskDiv);

    toDoInput.value = "";

    removeTask.addEventListener("click", () => {
        createTasksDiv.removeChild(taskDiv);
        taskCounter--

        if (taskCounter === 0) {
            createTasksDiv.remove();
            createTasksDiv = null;
        }
    })

}


