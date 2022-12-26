import axios from 'axios';

import { Session } from '@/utils/sessionStorage';

export const getUsers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/users`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getItem('accessToken')}`,
    },
  });

  return res.data;
};
