import { useQuery } from '@tanstack/react-query';

import { getUsers } from '@/apis/users';

const useUsers = () => {
  const { data, isLoading, isFetching } = useQuery(['users'], getUsers, {
    staleTime: 1000 * 60,
  });

  return { data, isLoading, isFetching };
};

export default useUsers;
