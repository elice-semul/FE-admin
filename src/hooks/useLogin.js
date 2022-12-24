import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postLoginAdmin } from '@/apis/login';
import { Session } from '@/utils/sessionStorage';

const useLogin = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const navigate = useNavigate();

  const loginAdmin = useMutation(['login'], postLoginAdmin, {
    onSuccess: ({ access_token: accessToken }) => {
      Session.setItem('accessToken', accessToken);
      navigate('/');
    },
    onError: () => setIsShowingModal(true),
  });

  return { isShowingModal, setIsShowingModal, loginAdmin };
};

export default useLogin;
