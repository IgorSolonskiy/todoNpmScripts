import './index.scss';
import renderList from './scripts/render/renderTask';
import initDelegation from './scripts/delegation/delegationTodo';

document.addEventListener('DOMContentLoaded', () => {
  initDelegation();
  renderList();
});
