import { createTasksList } from '../gateway/tasksGateway';

export default async () => {
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
  } catch (err) {
    alert(err.message);
  }
};
