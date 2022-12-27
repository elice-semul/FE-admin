import axios from 'axios';

import { headers } from './utils';

export const getUsers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/users`, {
    headers,
  });

  return res.data;
};

export const deleteUser = async ({ id }) => {
  await axios.delete(`${import.meta.env.VITE_BASE}/admin/users/${id}`, { headers });
};
