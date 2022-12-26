import styled from 'styled-components';

export const Container = styled.section`
  padding: 3.2rem;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
`;

export const Strong = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const BoardContainer = styled.div`
  margin-top: 6.4rem;
  width: 100%;
  height: 100%;
  max-height: 772px;
`;

export const BoardContentList = styled.ul`
  margin-top: 3.2rem;
  height: 100%;
  overflow-y: scroll;

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

export const BoardContentItem = styled.li`
  padding: 3.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  gap: 12rem;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 3.2rem;
  display: flex;
  gap: 2rem;
`;

export const ContentButton = styled.button`
  padding: 1.4rem 4.6rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;
