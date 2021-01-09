import { initCreateTasks } from "./onCreateTasks.js";
import { initChangeTasks } from "./onChangeTasks.js";
import { initDeleteButton } from "./onDeleteTasks.js";
import { getTasksList } from "../gateway/tasksGateway.js";

export function renderElem() {
  getTasksList().then((arrayTasks) => {
    const listElem = document.querySelector(".list");

    listElem.innerHTML = "";
    arrayTasks
      .sort((x, y) => new Date(x.createDate) - new Date(y.createDate))
      .sort((a, b) => a.done - b.done)
      .map((elem) => {
        const tasksItem = elem;

        const listItemElem = document.createElement("li");
        listItemElem.classList.add("list-item");

        const inputCheckboxElem = document.createElement("input");
        inputCheckboxElem.classList.add("list-item__checkbox");
        inputCheckboxElem.setAttribute("type", "checkbox");
        inputCheckboxElem.setAttribute("data-id", `${tasksItem.id}`);

        const btnDeleteElem = document.createElement("button");
        btnDeleteElem.classList.add("list-item__btnDelete");
        btnDeleteElem.setAttribute("data-id", `${tasksItem.id}`);

        const textTasksItem = document.createElement("span");
        textTasksItem.classList.add("list-item__text");
        textTasksItem.textContent = elem.text;

        if (elem.done === true) {
          listItemElem.classList.add("list-item__done");
          inputCheckboxElem.setAttribute("checked", "");
        }

        listItemElem.append(inputCheckboxElem, textTasksItem, btnDeleteElem);
        listElem.append(listItemElem);
        return tasksItem;
      });

    initChangeTasks();
    initCreateTasks();
    initDeleteButton();
  });
}
