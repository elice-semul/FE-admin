import { Spinner } from '@/components';
import { useUsers } from '@/hooks';
import { ContentList, ContentItem, ContentCell } from '@/styles/content';
import { getKoreanDateByDate } from '@/utils/date';

const Users = () => {
  const { data, isLoading } = useUsers();

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

  const mapedData = data.map(
    ({ id, name, email, phoneNumber, wallet, address: { roadAddr, detailAddr }, createdAt }) => (
      <ContentItem key={id}>
        <ContentCell>{name}</ContentCell>
        <ContentCell>{email}</ContentCell>
        <ContentCell>{phoneNumber}</ContentCell>
        <ContentCell>{`${roadAddr} ${detailAddr}`}</ContentCell>
        <ContentCell>지갑</ContentCell>
        <ContentCell>{getKoreanDateByDate(createdAt)}</ContentCell>
      </ContentItem>
    )
  );

  return <ContentList>{mapedData}</ContentList>;
};

export default Users;
