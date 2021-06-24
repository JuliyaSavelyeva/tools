import { renderTasks } from './renderer';
import { deleteTask, getTasksList } from './tasksGateway';

export const onDeleteTask = (e) => {
  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(() => renderTasks());
};
