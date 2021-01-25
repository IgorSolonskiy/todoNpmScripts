import { renderList } from "../render/render.js";
import { createTasksList } from "../gateway/tasksGateway.js";

const createTasks = async () => {
  try {
    const inputTextElem = document.querySelector(".task-input");

    if (!inputTextElem.value) return;

    const tasksData = {
      text: inputTextElem.value,
      done: false,
      createDate: new Date().toISOString(),
    };

    await createTasksList(tasksData);
    inputTextElem.value = "";
    renderList();
  } catch (err) {
    alert(err.message);
  }
};

export const initCreateTasks = () => {
  const btnElem = document.querySelector(".create-task-btn");

  btnElem.addEventListener("click", createTasks);
};
