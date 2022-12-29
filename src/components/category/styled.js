import styled from 'styled-components';

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

export const Container = styled.div`
  padding: 1.6rem 0;
  width: 1371px;
  overflow-x: ${({ status }) => status !== 'prices' && 'scroll'};
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 20%;
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const BoardHeaderList = styled.ul`
  width: ${({ status }) => getBoardHeaderListWidth(status)};
  padding: 0 3.2rem;
  display: flex;
  gap: 6rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const BoardHeaderItem = styled.li`
  flex-basis: 200px;
`;
