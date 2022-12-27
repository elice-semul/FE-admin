import { useState } from 'react';

import { Container, Title, Strong, BoardWrapper } from './styled';

import { Category, Menu, Partners, Users, Prices } from '@/components';
import withLoginConfirm from '@/hocs/withLoginConfirm';

const Home = () => {
  const [menuStatus, setMenuStatus] = useState('prices');

  return (
    <Container>
      <Title>
        <Strong>관리자</Strong>님 안녕하세요.
      </Title>
      <Menu onSetMenuStatus={setMenuStatus} />
      <BoardWrapper>
        <Category status={menuStatus} />
        {menuStatus === 'users' && <Users status={menuStatus} />}
        {menuStatus === 'partners' && <Partners status={menuStatus} />}
        {menuStatus === 'prices' && <Prices status={menuStatus} />}
      </BoardWrapper>
    </Container>
  );
};

const HomePage = withLoginConfirm(Home);

export default HomePage;
