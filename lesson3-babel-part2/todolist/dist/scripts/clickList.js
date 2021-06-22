import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';
export var onClickList = function onClickList(e) {
  var isCheckbox = e.target.classList.contains('list-item__checkbox');
  var isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (isCheckbox) {
    onToggleTask(e);
  }

  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};