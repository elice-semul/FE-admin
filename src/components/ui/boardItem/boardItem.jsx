import { useState } from 'react';

import { Container, MenuLayout, ButtonContainer, Button } from './styled';

const BoardItem = ({ children, id, status, onUpdate, onRemove }) => {
  const [isShowingLayout, setShowingLayout] = useState(false);

  const handleContainerMouseOver = () => {
    setShowingLayout(true);
  };

  const handleContainerMouseLeave = () => {
    setShowingLayout(false);
  };

  const handleUpdateButtonClick = () => {
    onUpdate();
  };

  const handleRemoveButtonClick = () => {
    onRemove(id);
  };

  return (
    <Container onMouseOver={handleContainerMouseOver} onMouseLeave={handleContainerMouseLeave}>
      {isShowingLayout && (
        <MenuLayout>
          <ButtonContainer>
            {status !== 'users' && (
              <Button type="button" onClick={handleUpdateButtonClick}>
                수정
              </Button>
            )}
            <Button type="button" onClick={handleRemoveButtonClick}>
              삭제
            </Button>
          </ButtonContainer>
        </MenuLayout>
      )}
      {children}
    </Container>
  );
};

export default BoardItem;
