import { deleteTasksList } from "../gateway/tasksGateway.js";
import { renderElem } from "./render.js";

const clickDeleteTasks = (event) => {
  const idItem = event.target.dataset.id;
  deleteTasksList(idItem).then(() => renderElem());
};

export const initDeleteButton = () => {
  const btnArrayElem = Array.from(
    document.querySelectorAll(".list-item__btnDelete")
  );

  btnArrayElem.map((elem) => elem.addEventListener("click", clickDeleteTasks));
};
