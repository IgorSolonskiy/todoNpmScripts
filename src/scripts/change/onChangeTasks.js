import { getTasksList, changeTasksList } from '../gateway/tasksGateway';

export default async (tasks) => {
  try {
    tasks.closest('.list-item').classList.toggle('list-item__done');

    const arrayTasks = await getTasksList();
    const task = arrayTasks.find((item) => item.id === tasks.dataset.id);

    await changeTasksList({ done: task.done !== true }, task.id);
  } catch (err) {
    alert(err.message);
  }
};
