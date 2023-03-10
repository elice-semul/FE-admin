import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* cursor: pointer; */
  /* background-color: rgba(0, 0, 0, 0.35); */
`;

export const ModalContentContainer = styled.div`
  padding: 2.4rem;
  width: 46rem;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: default;
`;

export const ModalDesc = styled.p`
  margin-bottom: 2.4rem;
  display: flex;
  font-size: 1.6rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  padding: 1.2rem 2rem;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
`;
