import axios from 'axios';

export const getPrices = async () => {
  // const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/products`);
  const res = await axios.get(`${import.meta.env.VITE_BASE}/products`);
  return res.data;
};

export const postPrice = async () => {
  // await axios.post(`${import.meta.env.VITE_BASE}/admin/products`);
  await axios.post(`${import.meta.env.VITE_BASE}/products`);
};

export const patchPrice = async () => {
  // await axios.patch(`${import.meta.env.VITE_BASE}/admin/products`);
  await axios.patch(`${import.meta.env.VITE_BASE}/products`);
};
