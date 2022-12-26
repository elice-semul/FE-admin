import { useQuery } from '@tanstack/react-query';

import { getPartners } from '@/apis/partners';

const usePartners = () => {
  const { data, isLoading } = useQuery(['partners'], getPartners);

  return { data, isLoading };
};

export default usePartners;
