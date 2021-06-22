import "core-js/modules/es.array.find.js";
import { renderTasks } from './renderer.js';
import { updateTask, getTasksList } from './tasksGateway.js';
export var onToggleTask = function onToggleTask(e) {
  var updatedTasksList = function updatedTasksList(tasksList) {
    var taskId = e.target.dataset.id;

    var _tasksList$find = tasksList.find(function (task) {
      return task.id === taskId;
    }),
        text = _tasksList$find.text,
        createDate = _tasksList$find.createDate;

    var done = e.target.checked;
    var updatedTaskData = {
      text: text,
      createDate: createDate,
      done: done,
      finishDate: done ? new Date().toISOString() : null
    };
    updateTask(taskId, updatedTaskData).then(function () {
      return getTasksList();
    }).then(function () {
      return renderTasks();
    });
  };

  getTasksList().then(function (tasksList) {
    return updatedTasksList(tasksList);
  });
}; // Prepare data
// Update data to db
// Read new data from server
// Save new data to front-end storage
// Update UI