import { createTasksList } from '../gateway/tasksGateway';
import renderList from '../render/renderTask';

const createBtn = document.querySelector('.btn');

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
    renderList();
  } catch (err) {
    alert(err.message);
  }
};

createBtn.addEventListener('click', createTasks);
