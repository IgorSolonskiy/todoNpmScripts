import "./index.scss";
import { initCreateTasks } from "./scripts/change/onCreateTasks.js";
import { renderList } from "./scripts/render/render.js";

document.addEventListener("DOMContentLoaded", () => {
  initCreateTasks();
  renderList();
});
