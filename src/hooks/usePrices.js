import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { deletePrice, getPrices, postPrice, putPrice } from '@/apis/prices';

const usePrices = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['prices'], getPrices, {
    staleTime: 1000 * 60,
  });

  const createPrice = useMutation(['prices'], postPrice, {
    onSuccess: () => {
      queryClient.invalidateQueries(['prices']);
      setIsShowingModal(false);
    },
  });

  const updatePrice = useMutation(['prices'], putPrice, {
    onSuccess: () => {
      queryClient.invalidateQueries(['prices']);
      setIsShowingModal(false);
    },
  });

  const removePrice = useMutation(['prices'], deletePrice, {
    onSuccess: () => queryClient.invalidateQueries(['prices']),
  });

  return {
    isShowingModal,
    setIsShowingModal,
    data,
    isLoading,
    createPrice,
    updatePrice,
    removePrice,
  };
};

export default usePrices;
