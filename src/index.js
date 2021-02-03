import './index.scss';
import './scripts/change/onCreateTasks';
import './scripts/delegation/delegationList';
import renderList from './scripts/render/renderTask';

document.addEventListener('DOMContentLoaded', () => {
  renderList();
});
