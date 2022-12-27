import { Spinner } from '@/components';
import { usePartners } from '@/hooks';
import { ContentList } from '@/styles/content';

const Partners = () => {
  const { data, isLoading } = usePartners();

  if (isLoading) {
    return (
      <ContentList>
        <Spinner />
      </ContentList>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <ContentList>
      <div>코트</div>
      <div>5000원</div>
    </ContentList>
  );
};

export default Partners;
