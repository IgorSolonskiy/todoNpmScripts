import './common.scss';
import './todoList.scss';
import changeTasks from '../change/onChangeTasks';
import deleteTasks from '../change/onDeleteTasks';
import createTasks from '../change/onCreateTasks';
import { getTasksList } from '../gateway/tasksGateway';

const listElem = document.querySelector('.list');

const renderElem = (elem) => {
  const listItemElem = document.createElement('li');

  listItemElem.classList.add('list-item');

  const inputCheckboxElem = document.createElement('input');

  inputCheckboxElem.classList.add('list-item__checkbox');
  inputCheckboxElem.setAttribute('type', 'checkbox');
  inputCheckboxElem.setAttribute('data-id', `${elem.id}`);

  const btnDeleteElem = document.createElement('button');

  btnDeleteElem.classList.add('list-item__btnDelete');
  btnDeleteElem.setAttribute('data-id', `${elem.id}`);

  const textTasksItem = document.createElement('span');

  textTasksItem.classList.add('list-item__text');
  textTasksItem.textContent = elem.text;

  if (elem.done) {
    listItemElem.classList.add('list-item__done');
    inputCheckboxElem.setAttribute('checked', '');
  }

  listItemElem.append(inputCheckboxElem, textTasksItem, btnDeleteElem);
  listElem.append(listItemElem);
};

const renderList = async () => {
  try {
    const arrayTasks = await getTasksList();

    listElem.innerHTML = '';
    arrayTasks
      .sort((x, y) => new Date(x.createDate) - new Date(y.createDate))
      .sort((a, b) => a.done - b.done)
      .forEach((elem) => renderElem(elem));
  } catch (err) {
    alert(err.message);
  }
};

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

export default () => {
  toDoElem.addEventListener('click', updateList);
  renderList();
};
