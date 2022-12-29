import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { deleteUser, getUsers } from '@/apis/users';

const useUsers = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['users'], getUsers, {
    staleTime: 1000 * 60,
  });

  const removeUser = useMutation(['users'], deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      setIsShowingModal(true);
    },
  });

  return { isShowingModal, setIsShowingModal, data, isLoading, removeUser };
};

export default useUsers;
