import { useState } from 'react';

import {
  Container,
  Title,
  Strong,
  BoardContainer,
  BoardContentList,
  BoardContentItem,
  ButtonContainer,
  ContentButton,
} from './styled';

import { Menu, Partners, Users } from '@/components';
import Category from '@/components/category/category';
import withLoginConfirm from '@/hocs/withLoginConfirm';

const Home = () => {
  const [menuStatus, setMenuStatus] = useState('price');

  return (
    <Container>
      <Title>
        <Strong>관리자</Strong>님 안녕하세요.
      </Title>
      <Menu onSetMenuStatus={setMenuStatus} />
      <BoardContainer>
        <Category {...{ menuStatus }} />
        {menuStatus === 'users' && <Users />}
        {menuStatus === 'partners' && <Partners />}
        {/* <BoardContentList>
          <BoardContentItem>
            <div>코트</div>
            <div>5000원</div>
            <ButtonContainer>
              <ContentButton type="button">수정</ContentButton>
              <ContentButton type="button">삭제</ContentButton>
            </ButtonContainer>
          </BoardContentItem>
        </BoardContentList> */}
      </BoardContainer>
    </Container>
  );
};

const HomePage = withLoginConfirm(Home);

export default HomePage;
