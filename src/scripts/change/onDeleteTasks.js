import { deleteTasksList } from '../gateway/tasksGateway';

export default async (tasks) => {
  try {
    await deleteTasksList(tasks.dataset.id);
  } catch (err) {
    alert(err.message);
  }
};
