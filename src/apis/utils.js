import { Session } from '@/utils/sessionStorage';

export const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${Session.getItem('accessToken')}`,
};
