import { initCreateTasks } from "./change/onCreateTasks.js";
import { renderList } from "./render/render.js";
document.addEventListener("DOMContentLoaded", () => {
  initCreateTasks();
  renderList();
});