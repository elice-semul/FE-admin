import styled, { css } from 'styled-components';

import { Button } from '@/styles/board';

const PriceBorderBottom = css`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const getBoardHeaderListWidth = (status) => {
  switch (status) {
    case 'prices':
      return '1371px';
    case 'users':
      return '1500px';
    case 'partners':
      return '1500px';
    case 'orders':
      return '2340px';
    default:
      return '0px';
  }
};

export const Container = styled.li`
  width: ${({ status }) => getBoardHeaderListWidth(status)};
  padding: 3.2rem 2.6rem 3.2rem 3.2rem;
  ${({ status }) => status === 'prices' && PriceBorderBottom};
  position: relative;
  display: flex;
  align-items: center;
  gap: 6rem;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const MenuLayout = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  right: 0;
  height: calc(100% + 2px);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MenuButton = styled.button`
  ${Button};
`;

export const HistoryContainer = styled.div`
  padding: 3.2rem;
  font-size: 1.6rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3.2rem;
  gap: 6rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const OrdersContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const BoardColumnContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0 3.2rem;
  gap: 6rem;
  font-size: 1.8rem;
`;
