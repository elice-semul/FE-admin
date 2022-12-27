import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 1440px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default App;
