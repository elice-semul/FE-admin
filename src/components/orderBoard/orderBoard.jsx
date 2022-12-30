import { BoardRow } from '@/components/ui';
import { BoardContainer, BoardColumn, BoardColumnContainer } from '@/styles/board';

const OrderBoard = ({ data, status, onUpdate: handleUpdate, onRemove: handleRemove }) => {
  const mapedData = data.map(
    ({
      id,
      orderNum,
      user,
      address: { roadAddr, detailAddr, jibun },
      laundry,
      orderProducts,
      status: orderStatus,
      pickUpMethod,
      notice,
    }) => {
      return (
        <BoardColumnContainer key={id}>
          <BoardRow
            {...{ id }}
            {...{ status }}
            {...{ orderProducts }}
            {...{ orderStatus }}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
          >
            <BoardColumn {...{ status }}>{orderNum}</BoardColumn>
            <BoardColumn {...{ status }}>{notice}</BoardColumn>
            <BoardColumn {...{ status }}>{user?.email ?? '제거됨'}</BoardColumn>
            <BoardColumn {...{ status }}>{user?.phoneNumber ?? '제거됨'}</BoardColumn>
            <BoardColumn {...{ status }}>{laundry?.name ?? '제거됨'}</BoardColumn>
            <BoardColumn {...{ status }}>{laundry?.phoneNumber ?? '제거됨'}</BoardColumn>
            <BoardColumn {...{ status }}>{`${roadAddr} ${detailAddr} ${jibun}`}</BoardColumn>
            <BoardColumn {...{ status }}>{pickUpMethod}</BoardColumn>
            <BoardColumn {...{ status }}>{orderStatus}</BoardColumn>
          </BoardRow>
        </BoardColumnContainer>
      );
    }
  );

  return <BoardContainer {...{ status }}>{mapedData}</BoardContainer>;
};

export default OrderBoard;
