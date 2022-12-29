import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  gap: 1.6rem;
`;

export const Search = styled.input`
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 0.8rem 1.6rem;
`;

export const SearchButton = styled.button`
  padding: 0.8rem;
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
