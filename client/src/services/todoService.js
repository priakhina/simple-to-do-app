import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/todos';

const getAll = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const create = async (newTodo) => {
  const response = await axios.post(BASE_URL, newTodo);
  return response.data;
};

const update = async (id, updatedTodo) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedTodo);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export default { getAll, create, update, remove };
