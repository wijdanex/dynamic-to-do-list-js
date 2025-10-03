document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create li element
        const li = document.createElement('li');

        // Create a text node for the task (so remove button can be separate)
        const taskNode = document.createTextNode(taskText);
        li.appendChild(taskNode);

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append remove button to li
        li.appendChild(removeBtn);

        // Append li to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Event listeners
    addButton.addEventLis
