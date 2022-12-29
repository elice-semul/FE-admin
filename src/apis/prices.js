import axios from 'axios';

import { Session } from '@/utils/sessionStorage';

export const getPrices = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/products`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getItem('accessToken')}`,
    },
  });
  return res.data;
};

export const postPrice = async ({ name, price, category }) => {
  await axios.post(
    `${import.meta.env.VITE_BASE}/admin/products`,
    { name, price: Number(price), category },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.getItem('accessToken')}`,
      },
    }
  );
};

export const putPrice = async ({ id, name, price, category }) => {
  await axios.put(
    `${import.meta.env.VITE_BASE}/admin/products/${id}`,
    { name, price: Number(price), category },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.getItem('accessToken')}`,
      },
    }
  );
};

export const deletePrice = async ({ id }) => {
  await axios.delete(`${import.meta.env.VITE_BASE}/admin/products/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getItem('accessToken')}`,
    },
  });
};
