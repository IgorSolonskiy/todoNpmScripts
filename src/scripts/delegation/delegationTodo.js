import changeTasks from '../change/onChangeTasks';
import deleteTasks from '../change/onDeleteTasks';
import createTasks from '../change/onCreateTasks';
import renderList from '../render/renderTask';

const toDoElem = document.querySelector('.todo-list');

const updateList = async (event) => {
  const checkboxElem = event.target.closest('.list-item__checkbox');
  const deleteBtn = event.target.closest('.list-item__btnDelete');
  const createBtn = event.target.closest('.btn');

  if (!checkboxElem && !deleteBtn && !createBtn) return;

  if (checkboxElem) {
    await changeTasks(checkboxElem);
  }

  if (deleteBtn) {
    await deleteTasks(deleteBtn);
  }

  if (createBtn) {
    await createTasks();
  }

  renderList();
};

export default () => toDoElem.addEventListener('click', updateList);
