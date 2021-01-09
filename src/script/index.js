import { initCreateTasks } from "./tasks/onCreateTasks.js";
import { renderElem } from "./tasks/render.js";

document.addEventListener("DOMContentLoaded", () => {
  initCreateTasks();
  renderElem();
});
