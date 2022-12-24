import styled from 'styled-components';

export const Nav = styled.nav`
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
`;

export const MenuButton = styled.button`
  padding: 3.2rem 7rem;
  cursor: pointer;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray100};
  }
`;
