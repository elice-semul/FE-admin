import { Spinner } from '@/components';
import { usePartners } from '@/hooks';
import { BoardContainer } from '@/styles/board';

const Partners = () => {
  const { data, isLoading } = usePartners();

  if (isLoading) {
    return (
      <BoardContainer>
        <Spinner />
      </BoardContainer>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <BoardContainer>
      <div>코트</div>
      <div>5000원</div>
    </BoardContainer>
  );
};

export default Partners;
