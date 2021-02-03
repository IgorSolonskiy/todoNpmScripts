import renderItem from '../render/renderTask';
import { getTasksList, changeTasksList } from '../gateway/tasksGateway';

const changeTasks = async (event) => {
  try {
    event.target.closest('.list-item').classList.toggle('list-item__done');

    const arrayTasks = await getTasksList();
    const task = arrayTasks.find((item) => item.id === event.target.dataset.id);

    await changeTasksList({ done: task.done !== true }, task.id);
    renderItem();
  } catch (err) {
    alert(err.message);
  }
};

export default () => {
  const checkboxElem = Array.from(
    document.querySelectorAll('.list-item__checkbox'),
  );

  checkboxElem.map((elem) => elem.addEventListener('click', changeTasks));
};
