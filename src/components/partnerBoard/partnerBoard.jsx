import { BoardRow } from '@/components/ui';
import { BoardContainer, BoardColumn, BoardColumnContainer } from '@/styles/board';
import { getKoreanDateByDate } from '@/utils/date';

const PartnerBoard = ({
  data,
  status,
  onApprove: handleApprove,
  onUpdate: handleUpdate,
  onRemove: handleRemove,
}) => {
  const mapedData = data.map(
    ({
      id,
      name,
      phoneNumber,
      address: { detailAddr, roadAddr, jibun },
      createdAt,
      bizNo,
      isApprove,
    }) => (
      <BoardColumnContainer key={id}>
        <BoardRow
          {...{ id }}
          {...{ status }}
          {...{ name }}
          {...{ phoneNumber }}
          {...{ bizNo }}
          {...{ isApprove }}
          address={{ detailAddr, roadAddr, jibun }}
          onApprove={handleApprove}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        >
          <BoardColumn>{name}</BoardColumn>
          <BoardColumn>{phoneNumber}</BoardColumn>
          <BoardColumn>{`${roadAddr} ${detailAddr} ${jibun}`}</BoardColumn>
          <BoardColumn>{bizNo}</BoardColumn>
          <BoardColumn>{isApprove ? '승인' : '대기'}</BoardColumn>
          <BoardColumn>{getKoreanDateByDate(createdAt)}</BoardColumn>
        </BoardRow>
      </BoardColumnContainer>
    )
  );

  return <BoardContainer {...{ status }}>{mapedData}</BoardContainer>;
};

export default PartnerBoard;
