import styled from 'styled-components';

export const Container = styled.section`
  padding: 3.2rem;
  width: 37.6rem;
  height: 38.4rem;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  margin: 0.5rem 0 1.5rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray300};
  padding-bottom: 0.5rem;
  display: flex;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: 1.6rem;
`;

export const JoinButton = styled.button`
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
