import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.to-string.js";
import { renderTasks } from './renderer.js';
import { createTask, getTasksList } from './tasksGateway.js';
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector('.task-input');
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString()
  };
  createTask(newTask).then(function () {
    return getTasksList();
  }).then(function () {
    return renderTasks();
  });
}; // Prepare data
// Write data to db
// Read new data from server
// Save new data to front-end storage
// Update UI