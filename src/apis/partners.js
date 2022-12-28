import axios from 'axios';

import { headers } from './utils';

export const getPartners = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/partners`, {
    headers,
  });

  return res.data;
};

export const putPartner = async ({
  id,
  name,
  address: { roadAddr, detailAddr, jibun },
  phoneNumber,
  bizNo,
}) => {
  await axios.put(
    `${import.meta.env.VITE_BASE}/admin/partners/${id}`,
    {
      name,
      address: {
        roadAddr,
        detailAddr,
        jibun,
      },
      phoneNumber,
      bizNo,
    },
    {
      headers,
    }
  );
};

export const deletePartner = async ({ id }) => {
  await axios.delete(`${import.meta.env.VITE_BASE}/admin/users/${id}`, {
    headers,
  });
};
