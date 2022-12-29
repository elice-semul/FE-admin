import axios from 'axios';

import { Session } from '@/utils/sessionStorage';

export const getOrders = async (search) => {
  if (!search) {
    const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/orders`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.getItem('accessToken')}`,
      },
    });
    return res.data;
  }

  const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/orders/?email=${search}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getItem('accessToken')}`,
    },
  });
  return res.data;
};

export const putOrder = async ({ id, status }) => {
  await axios.put(
    `${import.meta.env.VITE_BASE}/admin/orders/${id}`,
    {
      status,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.getItem('accessToken')}`,
      },
    }
  );
};

export const deleteOrder = async ({ id }) => {
  await axios.delete(`${import.meta.env.VITE_BASE}/admin/orders/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getItem('accessToken')}`,
    },
  });
};
