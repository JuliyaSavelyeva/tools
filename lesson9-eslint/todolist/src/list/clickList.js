import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

export const onClickList = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (isCheckbox) {
    onToggleTask(e);
  }

  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};
