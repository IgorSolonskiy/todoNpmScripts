import { initCreateTasks } from "./src/script/onCreateTasks.js";
import { renderElem } from "./src/script/render.js";

document.addEventListener("DOMContentLoaded", () => {
  initCreateTasks();
  renderElem();
});
