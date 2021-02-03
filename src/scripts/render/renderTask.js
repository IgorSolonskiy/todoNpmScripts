import './common.scss';
import './todoList.scss';
import initChangeTasks from '../change/onChangeTasks';
import initDeleteButton from '../change/onDeleteTasks';
import { getTasksList } from '../gateway/tasksGateway';

const composeInit = (...funcs) => funcs.map((func) => func());

const renderElem = (listElem, elem) => {
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

export default async () => {
  try {
    const arrayTasks = await getTasksList();
    const listElem = document.querySelector('.list');

    listElem.innerHTML = '';
    arrayTasks
      .sort((x, y) => new Date(x.createDate) - new Date(y.createDate))
      .sort((a, b) => a.done - b.done)
      .forEach((elem) => renderElem(listElem, elem));

    composeInit(initChangeTasks, initDeleteButton);
  } catch (err) {
    alert(err.message);
  }
};
