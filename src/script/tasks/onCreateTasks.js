import { renderElem } from "./render.js";
import { createTasksList } from "../gateway/tasksGateway.js";

const createTasks = () => {
  const inputTextElem = document.querySelector(".task-input");
  if (!inputTextElem.value) return;

  const tasksData = {
    text: inputTextElem.value,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTasksList(tasksData)
    .then((response) => response.json())
    .then(() => {
      inputTextElem.value = "";
      renderElem();
    });
};
export function initCreateTasks() {
  const btnElem = document.querySelector(".create-task-btn");
  btnElem.addEventListener("click", createTasks);
}
