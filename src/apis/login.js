import axios from 'axios';

export const postLoginAdmin = async ({ email, password }) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE}/users/login`, {
    email,
    password,
  });

  return res.data;
};
