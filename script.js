// Variables 
const addTaskBtn = document.getElementById('add-btn');
const taskInput = document.getElementById("task-input");
// Add Task Event 
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();


    if (taskText === '') {
        return; // we don't add empty tasks 
    }

    // add the task  on the TO-DO list 
    const node = document.createElement("li");
    node.innerHTML =`
                <div class="p-check-task">
                  <label class="circle-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <p>${taskText}</p>
                </div>
                <button type="submit" id="delete-btn">
                  <img src="images/x.png" alt="delete" />
                </button>
    `;
    document.getElementById("task-list").appendChild(node);
    // clear input 
    taskInput.value = "";
});

// delete a task 

