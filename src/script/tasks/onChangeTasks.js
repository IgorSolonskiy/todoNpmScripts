import { renderElem } from "./render.js";
import { getTasksList, changeTasksList } from "../gateway/tasksGateway.js";

const changeTasks = (event) => {
  event.target.closest(".list-item").classList.toggle("list-item__done");
  getTasksList().then((arrayTasks) => {
    arrayTasks.forEach((item) => {
      if (item.id === event.target.dataset.id) {
        if (item.done === true) {
          changeTasksList({ done: false }, item.id)
            .then((response) => response.json())
            .then(() => renderElem());
        } else {
          changeTasksList({ done: true }, item.id)
            .then((response) => response.json())
            .then(() => renderElem());
        }
      }
    });
  });
};

export const initChangeTasks = () => {
  const checkboxElem = Array.from(
    document.querySelectorAll(".list-item__checkbox")
  );

  checkboxElem.map((elem) => elem.addEventListener("click", changeTasks));
};
