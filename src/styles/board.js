import styled, { css } from 'styled-components';

export const BoardContainer = styled.ul`
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

export const BoardColumn = styled.div`
  flex-basis: 200px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
`;

export const Button = css`
  padding: 1.4rem 4.6rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;
