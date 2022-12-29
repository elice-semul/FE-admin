import { useState } from 'react';

import {
  Container,
  MenuLayout,
  MenuButton,
  HistoryContainer,
  CategoryContainer,
  OrdersContainer,
  BoardColumnContainer,
} from './styled';

import { historyCategoryMock } from '@/mocks/mocks';
import PortalNoti from '@/portals/portalNoti';
import { BoardColumn, ButtonContainer } from '@/styles/board';
import { getKoreanDateByDate } from '@/utils/date';

const BoardRow = ({
  children,
  orderProducts,
  id,
  status,
  orderStatus,
  category,
  address,
  name,
  phoneNumber,
  bizNo,
  isApprove,
  price,
  onSetType,
  onApprove,
  onUpdate,
  onRemove,
}) => {
  const [isShowingLayout, setShowingLayout] = useState(false);
  const [isShowingApproveModal, setIsShowingApproveModal] = useState(false);
  const [isShowingOrderHistory, setIsShowingOrderHistory] = useState(false);

  const handleContainerMouseOver = () => {
    setShowingLayout(true);
  };

  const handleContainerMouseLeave = () => {
    setShowingLayout(false);
  };

  const handleOrderHistoryButtonClick = () => {
    setIsShowingOrderHistory((current) => !current);
  };

  const handleApproveButtonClick = (event) => {
    event.stopPropagation();
    onApprove(id);
    setIsShowingApproveModal(true);
  };

  const handleUpdateButtonClick = (event) => {
    event.stopPropagation();

    if (status === 'prices') {
      onSetType('update');
      onUpdate(id, category, name, price);
    } else if (status === 'partners') {
      onUpdate(id, address, name, phoneNumber, bizNo);
    } else if (status === 'orders') {
      onUpdate(id, orderStatus);
    }
  };

  const handleRemoveButtonClick = (event) => {
    event.stopPropagation();
    onRemove(id);
  };

  if (!orderProducts) {
    return (
      <Container
        {...{ status }}
        onMouseOver={handleContainerMouseOver}
        onMouseLeave={handleContainerMouseLeave}
      >
        {isShowingLayout && (
          <MenuLayout>
            <ButtonContainer>
              {status === 'orders' && (
                <MenuButton type="button" onClick={handleOrderHistoryButtonClick}>
                  주문 내역
                </MenuButton>
              )}
              {status !== 'users' && (
                <MenuButton type="button" onClick={handleUpdateButtonClick}>
                  수정
                </MenuButton>
              )}
              <MenuButton type="button" onClick={handleRemoveButtonClick}>
                삭제
              </MenuButton>
              {status === 'partners' && !isApprove && (
                <MenuButton type="button" onClick={handleApproveButtonClick}>
                  승인
                </MenuButton>
              )}
            </ButtonContainer>
          </MenuLayout>
        )}
        {children}
        {isShowingApproveModal && (
          <PortalNoti
            onSetIsShowingModal={setIsShowingApproveModal}
            text="파트너가 승인되었습니다."
          />
        )}
      </Container>
    );
  }

  const mapedHistoryCategoryMock = historyCategoryMock.map((category) => (
    <BoardColumn key={category} {...{ status }}>
      {category}
    </BoardColumn>
  ));

  const mapedOrderProducts = orderProducts.map(({ id, productName, price, qty, createdAt }) => (
    <BoardColumnContainer key={id}>
      <BoardColumn {...{ status }}>{productName}</BoardColumn>
      <BoardColumn {...{ status }}>{price}</BoardColumn>
      <BoardColumn {...{ status }}>{qty}</BoardColumn>
      <BoardColumn {...{ status }}>{getKoreanDateByDate(createdAt)}</BoardColumn>
    </BoardColumnContainer>
  ));

  return (
    <>
      <Container
        {...{ status }}
        onMouseOver={handleContainerMouseOver}
        onMouseLeave={handleContainerMouseLeave}
      >
        {isShowingLayout && (
          <MenuLayout>
            <ButtonContainer>
              {status === 'orders' && (
                <MenuButton type="button" onClick={handleOrderHistoryButtonClick}>
                  주문 내역
                </MenuButton>
              )}
              {status !== 'users' && (
                <MenuButton type="button" onClick={handleUpdateButtonClick}>
                  수정
                </MenuButton>
              )}
              <MenuButton type="button" onClick={handleRemoveButtonClick}>
                삭제
              </MenuButton>
              {status === 'partners' && !isApprove && (
                <MenuButton type="button" onClick={handleApproveButtonClick}>
                  승인
                </MenuButton>
              )}
            </ButtonContainer>
          </MenuLayout>
        )}
        {children}
        {isShowingApproveModal && (
          <PortalNoti
            onSetIsShowingModal={setIsShowingApproveModal}
            text="파트너가 승인되었습니다."
          />
        )}
      </Container>
      {isShowingOrderHistory && (
        <HistoryContainer>
          <CategoryContainer>{mapedHistoryCategoryMock}</CategoryContainer>
          <OrdersContainer>{mapedOrderProducts}</OrdersContainer>
        </HistoryContainer>
      )}
    </>
  );
};

export default BoardRow;
