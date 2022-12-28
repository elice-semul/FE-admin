import { BoardRow } from '@/components/ui';
import { BoardContainer, BoardColumn } from '@/styles/board';
import { getKoreanDateByDate } from '@/utils/date';

const PartnerBoard = ({ data, status, onUpdate: handleUpdate, onRemove: handleRemove }) => {
  const mapedData = data.map(
    ({ id, name, phoneNumber, address: { detailAddr, roadAddr, jibun }, createdAt, bizNo }) => (
      <BoardRow
        key={id}
        {...{ id }}
        {...{ status }}
        {...{ name }}
        {...{ phoneNumber }}
        {...{ bizNo }}
        address={{ detailAddr, roadAddr, jibun }}
        onUpdate={handleUpdate}
        onRemove={handleRemove}
      >
        <BoardColumn>{name}</BoardColumn>
        <BoardColumn>{phoneNumber}</BoardColumn>
        <BoardColumn>{`${roadAddr} ${detailAddr} ${jibun}`}</BoardColumn>
        <BoardColumn>{bizNo}</BoardColumn>
        <BoardColumn>{getKoreanDateByDate(createdAt)}</BoardColumn>
      </BoardRow>
    )
  );

  return <BoardContainer>{mapedData}</BoardContainer>;
};

export default PartnerBoard;
