import styled from 'styled-components';

export const Container = styled.section`
  padding: 3.2rem;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 2.8rem;
  font-weight: 700;
`;

export const Strong = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const BoardWrapper = styled.div`
  margin-top: 6.4rem;
  width: 100%;
  height: 100%;
  max-height: 772px;
`;
