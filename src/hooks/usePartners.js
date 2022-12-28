import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { deletePartner, getPartners, putPartner } from '@/apis/partners';

const usePartners = () => {
  const queryClient = useQueryClient();
  const [isShowingNotiModal, setIsShowingNotiModal] = useState(false);
  const [isShowingFormModal, setIsShowingFormModal] = useState(false);

  const { data, isLoading } = useQuery(['partners'], getPartners);

  const updatePartner = useMutation(['partners'], putPartner, {
    onSuccess: () => {
      queryClient.invalidateQueries(['partners']);
      setIsShowingFormModal(false);
    },
  });

  const removePartner = useMutation(['partners'], deletePartner, {
    onSuccess: () => queryClient.invalidateQueries(['partners']),
  });

  return {
    isShowingNotiModal,
    setIsShowingNotiModal,
    isShowingFormModal,
    setIsShowingFormModal,
    data,
    isLoading,
    updatePartner,
    removePartner,
  };
};

export default usePartners;
