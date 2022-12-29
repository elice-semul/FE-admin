import { BoardRow } from '@/components/ui';
import { BoardContainer, BoardColumn, BoardColumnContainer } from '@/styles/board';
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
    }) => (
      <BoardColumnContainer key={id}>
        <BoardRow {...{ id }} {...{ status }} onRemove={handleRemove}>
          <BoardColumn>{name}</BoardColumn>
          <BoardColumn>{email}</BoardColumn>
          <BoardColumn>{phoneNumber}</BoardColumn>
          <BoardColumn>{`${roadAddr} ${detailAddr}`}</BoardColumn>
          <BoardColumn>{money}</BoardColumn>
          <BoardColumn>{getKoreanDateByDate(createdAt)}</BoardColumn>
        </BoardRow>
      </BoardColumnContainer>
    )
  );

  return <BoardContainer {...{ status }}>{mapedData}</BoardContainer>;
};

export default UserBoard;
