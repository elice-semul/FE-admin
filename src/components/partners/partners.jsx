import { Spinner } from '@/components';
import { usePartners } from '@/hooks';
import { ContentList, ContentItem, ContentCell } from '@/styles/content';

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
      <ContentItem>
        <div>코트</div>
        <div>5000원</div>
      </ContentItem>
    </ContentList>
  );
};

export default Partners;
