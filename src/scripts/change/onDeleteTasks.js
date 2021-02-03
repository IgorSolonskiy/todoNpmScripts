import { deleteTasksList } from '../gateway/tasksGateway';
import renderList from '../render/renderTask';

const clickDeleteTasks = async (event) => {
  try {
    await deleteTasksList(event.target.dataset.id);
    renderList();
  } catch (err) {
    alert(err.message);
  }
};

export default () => {
  const btnArrayElem = Array.from(
    document.querySelectorAll('.list-item__btnDelete'),
  );

  btnArrayElem.map((elem) => elem.addEventListener('click', clickDeleteTasks));
};
