import { BoardItem } from '@/components/ui';
import { ContentList, ContentCell } from '@/styles/content';
import { getKoreanDateByDate } from '@/utils/date';

const UserBoard = ({ data, status, onRemove: handleRemove }) => {
  const mapedData = data.map(
    ({
      id,
      name,
      email,
      phoneNumber,
      address: { roadAddr, detailAddr },
      createdAt,
      wallet: { money },
    }) => {
      return (
        <BoardItem key={id} {...{ id }} {...{ status }} onRemove={handleRemove}>
          <ContentCell>{name}</ContentCell>
          <ContentCell>{email}</ContentCell>
          <ContentCell>{phoneNumber}</ContentCell>
          <ContentCell>{`${roadAddr} ${detailAddr}`}</ContentCell>
          <ContentCell>{money}</ContentCell>
          <ContentCell>{getKoreanDateByDate(createdAt)}</ContentCell>
        </BoardItem>
      );
    }
  );

  return <ContentList>{mapedData}</ContentList>;
};

export default UserBoard;
