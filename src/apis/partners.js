import axios from 'axios';

import { headers } from './utils';

export const getPartners = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/partners`, {
    headers,
  });

  return res.data;
};
