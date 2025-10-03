document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Assign onclick event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeBtn);

        // Append li to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Attach event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
