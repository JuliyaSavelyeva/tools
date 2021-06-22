import { renderTasks } from './renderer.js';
import { deleteTask, getTasksList } from './tasksGateway.js';
export var onDeleteTask = function onDeleteTask(e) {
  var taskId = e.target.dataset.id;
  deleteTask(taskId).then(function () {
    return getTasksList();
  }).then(function () {
    return renderTasks();
  });
};