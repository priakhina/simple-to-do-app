import axios from 'axios';

const TODO_API_BASE_URL = '/api/todos';

const getAll = async () => {
  const response = await axios.get(TODO_API_BASE_URL);
  return response.data;
};

const create = async (newTodo) => {
  const response = await axios.post(TODO_API_BASE_URL, newTodo);
  return response.data;
};

const update = async (id, updatedTodo) => {
  const response = await axios.put(`${TODO_API_BASE_URL}/${id}`, updatedTodo);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${TODO_API_BASE_URL}/${id}`);
  return response.data;
};

const removeCompleted = async () => {
  const response = await axios.delete(`${TODO_API_BASE_URL}/completed`);
  return response.data;
};

export default { getAll, create, update, remove, removeCompleted };
