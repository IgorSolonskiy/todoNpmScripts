import './index.scss';
import initCreateTasks from './scripts/change/onCreateTasks';
import renderList from './scripts/render/renderTask';

document.addEventListener('DOMContentLoaded', () => {
  initCreateTasks();
  renderList();
});
