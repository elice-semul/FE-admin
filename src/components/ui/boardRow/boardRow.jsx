import { useState } from 'react';

import { Container, MenuLayout, MenuButton } from './styled';

import { ButtonContainer } from '@/styles/board';

const BoardRow = ({
  children,
  id,
  status,
  category,
  name,
  price,
  onSetType,
  onUpdate,
  onRemove,
}) => {
  const [isShowingLayout, setShowingLayout] = useState(false);

  const handleContainerMouseOver = () => {
    setShowingLayout(true);
  };

  const handleContainerMouseLeave = () => {
    setShowingLayout(false);
  };

  const handleUpdateButtonClick = (event) => {
    event.stopPropagation();
    onSetType('update');
    onUpdate(id, category, name, price);
  };

  const handleRemoveButtonClick = (event) => {
    event.stopPropagation();
    onRemove(id);
  };

  return (
    <Container onMouseOver={handleContainerMouseOver} onMouseLeave={handleContainerMouseLeave}>
      {isShowingLayout && (
        <MenuLayout>
          <ButtonContainer>
            {status !== 'users' && (
              <MenuButton type="button" onClick={handleUpdateButtonClick}>
                수정
              </MenuButton>
            )}
            <MenuButton type="button" onClick={handleRemoveButtonClick}>
              삭제
            </MenuButton>
          </ButtonContainer>
        </MenuLayout>
      )}
      {children}
    </Container>
  );
};

export default BoardRow;
