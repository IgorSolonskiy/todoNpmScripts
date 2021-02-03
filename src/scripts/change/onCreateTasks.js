import { createTasksList } from '../gateway/tasksGateway';
import renderTask from '../render/renderTask';

const createTasks = async () => {
  try {
    const inputTextElem = document.querySelector('.task-input');

    if (!inputTextElem.value) return;

    const tasksData = {
      text: inputTextElem.value,
      done: false,
      createDate: new Date().toISOString(),
    };

    await createTasksList(tasksData);
    inputTextElem.value = '';
    renderTask();
  } catch (err) {
    alert(err.message);
  }
};

export default () => {
  const btnElem = document.querySelector('.create-task-btn');

  btnElem.addEventListener('click', createTasks);
};
