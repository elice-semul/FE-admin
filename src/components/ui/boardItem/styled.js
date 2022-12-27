import styled from 'styled-components';

export const Container = styled.li`
  padding: 3.2rem 2.6rem 3.2rem 3.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
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
  height: calc(100% + 2px);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 1.4rem 4.6rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;
