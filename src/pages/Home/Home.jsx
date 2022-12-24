import { useState } from 'react';

import {
  Container,
  Title,
  Strong,
  BoardContainer,
  BoardHeaderList,
  BoardHeaderItem,
  BoardContentList,
  BoardContentItem,
  ButtonContainer,
  ContentButton,
} from './styled';

import { Menu } from '@/components';
import { categoryMock } from '@/mocks/category';

const Home = () => {
  const [menuStatus, setMenuStatus] = useState('price');

  const mapedCategoryMock = categoryMock[menuStatus].map((el, index) => (
    <BoardHeaderItem key={index}>{el}</BoardHeaderItem>
  ));

  return (
    <Container>
      <Title>
        <Strong>관리자</Strong>님 안녕하세요.
      </Title>
      <Menu onSetMenuStatus={setMenuStatus} />
      <BoardContainer>
        <BoardHeaderList>{mapedCategoryMock}</BoardHeaderList>
        <BoardContentList>
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>{' '}
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>
        </BoardContentList>
      </BoardContainer>
    </Container>
  );
};

export default Home;
