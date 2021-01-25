const baseUrl = "https://5ff30f8428c3980017b18ebb.mockapi.io/api/v1/tasks";

const statusProcessing = (response) => {
  if (!response.ok) throw new Error("Internal Server Error");

  return response.json();
};

export const getTasksList = () =>
  fetch(baseUrl).then((response) => statusProcessing(response));

export const createTasksList = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => statusProcessing(response));

export const changeTasksList = (taskData, taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => statusProcessing(response));

export const deleteTasksList = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => statusProcessing(response));
