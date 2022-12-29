import axios from 'axios';

import { Session } from '@/utils/sessionStorage';

export const getPartners = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/admin/partners`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getItem('accessToken')}`,
    },
  });

  return res.data;
};

export const postPartnerApprove = async ({ id }) => {
  await axios.post(
    `${import.meta.env.VITE_BASE}/admin/partners/${id}/approve`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.getItem('accessToken')}`,
      },
    }
  );
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
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.getItem('accessToken')}`,
      },
    }
  );
};

export const deletePartner = async ({ id }) => {
  await axios.delete(`${import.meta.env.VITE_BASE}/admin/partners/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getItem('accessToken')}`,
    },
  });
};
