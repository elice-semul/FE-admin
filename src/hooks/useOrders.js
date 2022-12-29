import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { deleteOrder, getOrders, putOrder } from '@/apis/orders';

const useOrders = (search) => {
  const queryClient = useQueryClient();
  const [isShowingNotiModal, setIsShowingNotiModal] = useState(false);
  const [isShowingFormModal, setIsShowingFormModal] = useState(false);

  const { data, isLoading, refetch } = useQuery(['orders'], () => getOrders(search), {
    staleTime: 1000 * 60,
  });

  const updateOrder = useMutation(['orders'], putOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
      setIsShowingFormModal(false);
    },
  });

  const removeOrder = useMutation(['orders'], deleteOrder, {
    onSuccess: () => queryClient.invalidateQueries(['orders']),
  });

  return {
    isShowingNotiModal,
    setIsShowingNotiModal,
    isShowingFormModal,
    setIsShowingFormModal,
    data,
    isLoading,
    refetch,
    updateOrder,
    removeOrder,
  };
};

export default useOrders;
