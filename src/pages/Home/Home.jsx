import { useState } from 'react';

import { Container, Title, Strong, BoardWrapper } from './styled';

import { Category, Menu, Partners, Users, Prices, Orders } from '@/components';
import withLoginConfirm from '@/hocs/withLoginConfirm';

const Home = () => {
  const [menuStatus, setMenuStatus] = useState('prices');

  return (
    <Container>
      <Title>
        <div>
          <Strong>관리자</Strong>님 안녕하세요.
        </div>
      </Title>
      <Menu onSetMenuStatus={setMenuStatus} />
      <BoardWrapper>
        <Category status={menuStatus} />
        {menuStatus === 'prices' && <Prices status={menuStatus} />}
        {menuStatus === 'users' && <Users status={menuStatus} />}
        {menuStatus === 'partners' && <Partners status={menuStatus} />}
        {menuStatus === 'orders' && <Orders status={menuStatus} />}
      </BoardWrapper>
    </Container>
  );
};

const HomePage = withLoginConfirm(Home);

export default HomePage;
