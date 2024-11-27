import axios from 'axios';

const API_BASE = 'http://localhost:3001/api/v1';

export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE}/todos`);
  return response.data;
};