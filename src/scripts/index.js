import { initCreateTasks } from "./tasks/onCreateTasks.js";
import { renderList } from "./tasks/render.js";

document.addEventListener("DOMContentLoaded", () => {
  initCreateTasks();
  renderList();
});
