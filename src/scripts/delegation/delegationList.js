import changeTasks from '../change/onChangeTasks';
import deleteTasks from '../change/onDeleteTasks';
import renderList from '../render/renderTask';

const listElem = document.querySelector('.list');

const updateList = async (event) => {
  const checkboxElem = event.target.closest('.list-item__checkbox');
  const deleteBtn = event.target.closest('.list-item__btnDelete');

  if (!checkboxElem && !deleteBtn) return;

  if (checkboxElem) {
    await changeTasks(checkboxElem);
  }

  if (deleteBtn) {
    await deleteTasks(deleteBtn);
  }

  renderList();
};

listElem.addEventListener('click', updateList);
