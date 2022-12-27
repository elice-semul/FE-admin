import styled from 'styled-components';

import { Button } from '@/styles/board';

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

export const MenuButton = styled.button`
  ${Button};
`;
