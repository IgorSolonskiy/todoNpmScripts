const baseUrl = "https://5ff30f8428c3980017b18ebb.mockapi.io/api/v1/tasks";

export const getTasksList = () =>
  fetch(baseUrl).then((response) => response.json());

export const createTasksList = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const changeTasksList = (taskData, taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const deleteTasksList = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });
