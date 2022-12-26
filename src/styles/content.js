import styled from 'styled-components';

export const ContentList = styled.ul`
  margin-top: 3.2rem;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const ContentItem = styled.li`
  padding: 3.2rem 2.6rem 3.2rem 3.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  gap: 6rem;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ContentCell = styled.div`
  flex-basis: 200px;
`;
