import { Container } from './styled';

import { BoardRow } from '@/components/ui';
import { BoardContainer, BoardColumn, BoardColumnContainer } from '@/styles/board';

const OrderBoard = ({ data, status, onUpdate: handleUpdate, onRemove: handleRemove }) => {
  const mapedData = data.map(
    ({
      id,
      orderNum,
      user: { email, phoneNumber },
      address: { roadAddr, detailAddr, jibun },
      laundry: { name, phoneNumber: laundryPhoneNumber },
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
            <BoardColumn>{orderNum}</BoardColumn>
            <BoardColumn>{notice}</BoardColumn>
            <BoardColumn>{email}</BoardColumn>
            <BoardColumn>{phoneNumber}</BoardColumn>
            <BoardColumn>{name}</BoardColumn>
            <BoardColumn>{laundryPhoneNumber}</BoardColumn>
            <BoardColumn>{`${roadAddr} ${detailAddr} ${jibun}`}</BoardColumn>
            <BoardColumn>{pickUpMethod}</BoardColumn>
            <BoardColumn>{orderStatus}</BoardColumn>
          </BoardRow>
        </BoardColumnContainer>
      );
    }
  );

  return <BoardContainer {...{ status }}>{mapedData}</BoardContainer>;
};

export default OrderBoard;
