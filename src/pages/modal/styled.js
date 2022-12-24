import styled from 'styled-components';

export const StyledModalLayout = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const StyledModalContentContainer = styled.div`
  padding: 2.4rem;
  width: 46rem;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  cursor: default;
`;

export const StyledModalTitle = styled.h2`
  min-height: 3.6rem;
  margin: 0px 0px 1.2rem;
  font-size: 2.4rem;
  word-break: break-all;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

export const StyledModalDesc = styled.p`
  margin-bottom: 2.4rem;
  display: flex;
  font-size: 1.6rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledModalButton = styled.button`
  padding: 1.2rem 2rem;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
`;
