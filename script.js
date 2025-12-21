// Variables 
const addTaskBtn = document.getElementById('add-btn');
const taskInput = document.getElementById("task-input");

// create a array of tasks to save it on the localStorage 
let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(taskArray);

// Fonctions 
function renderTask(taskObj) {
  const node = document.createElement("li");

  node.innerHTML = `<div class="p-check-task">
                  <label class="circle-checkbox">
                    <input type="checkbox" ${taskObj.completed ? "checked" : ""}/>
                    <span class="checkmark"></span>
                  </label>
                  <p class ="${taskObj.completed ? "completed" : ""}">${taskObj.text}</p>
                </div>
                <button type="submit" class="delete-btn">
                  <img src="images/x.png" alt="delete" />
                </button>
  `;

  // Checkbox update
  const checkbox = node.querySelector('input[type="checkbox"');
  const p = node.querySelector('p');

  // if the task is checked : 
  checkbox.addEventListener('change',() =>{

    // 1- update completed property 
    taskObj.completed = checkbox.checked;

    // 2- mark the task as completed 
    p.classList.toggle("completed",taskObj.completed);

    // 3- save on localStorage 
    localStorage.setItem("tasks",JSON.stringify(taskArray));

  });
  // Attach delete event to this task : Delete listener must be attached for each new task
  node.querySelector('.delete-btn').addEventListener("click", () => {

    // 1- find the index of the task in taskArray 
    let index = taskArray.findIndex(item => item.text === taskObj.text);

    if (index !== -1) {
      // 2- Remove it using splice 
      taskArray.splice(index, 1);
      // 3 - Save update array to localStorage 
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    }

    // 4- Remove the li from the DOM 
    node.remove();



  });

  document.getElementById("task-list").appendChild(node);
}
// Render ALL saved tasks on load
taskArray.forEach(task => {
  renderTask(task);
});

// Add Task Event 
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return; // we don't add empty tasks 
  }

  // When the user clicks Add, we must push a new task object into taskArray
  const taskObj = {
    text: taskText,
    completed: false
  };
  taskArray.push(taskObj);
  console.log(taskArray);
  // add Tasks in LocalStorage 
  localStorage.setItem("tasks", JSON.stringify(taskArray));

  console.log(taskArray);
  renderTask(taskObj);

  // clear input 
  taskInput.value = "";
});

// add an event when click enter while typing  the task on  the input 
taskInput.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    addTaskBtn.click();
  }
});






