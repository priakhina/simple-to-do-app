import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/todos';

const getAll = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const update = async (id, updatedTodo) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedTodo);
  return response.data;
};

export default { getAll, update };
