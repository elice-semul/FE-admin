import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Session } from '@/utils/sessionStorage';

const withLoginConfirm = (Component) => {
  return (hocProps) => {
    const navigate = useNavigate();

    useEffect(() => {
      Session.getItem('accessToken') ?? navigate('/login');
    });

    return <Component {...hocProps} />;
  };
};

export default withLoginConfirm;
