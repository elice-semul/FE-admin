import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* cursor: pointer;
  background-color: rgba(0, 0, 0, 0.35); */
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

export const InputContainer = styled.div`
  margin: 0.5rem 0 0.4rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray300};
  padding-bottom: 0.5rem;
  display: flex;
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;

  ${InputContainer}+${InputContainer} {
    margin-top: 1.4rem;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: 1.6rem;
`;

export const RequiredText = styled.span`
  color: ${({ theme }) => theme.colors.warning};
`;

export const FormButton = styled.button`
  margin-top: 3.2rem;
  border: none;
  width: 100%;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.background};
  cursor: pointer;
`;
