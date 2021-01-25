import { deleteTasksList } from "../gateway/tasksGateway.js";
import { renderList } from "../render/render.js";

const clickDeleteTasks = async (event) => {
  try {
    await deleteTasksList(event.target.dataset.id);
    renderList();
  } catch (err) {
    alert(err.message);
  }
};

export const initDeleteButton = () => {
  const btnArrayElem = Array.from(
    document.querySelectorAll(".list-item__btnDelete")
  );

  btnArrayElem.map((elem) => elem.addEventListener("click", clickDeleteTasks));
};
