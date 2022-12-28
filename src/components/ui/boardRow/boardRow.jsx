import { useState } from 'react';

import { Container, MenuLayout, MenuButton } from './styled';

import { ButtonContainer } from '@/styles/board';

const BoardRow = ({
  children,
  id,
  status,
  category,
  address,
  name,
  phoneNumber,
  bizNo,
  isApprove,
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

  const handleApproveButtonClick = (event) => {
    event.stopPropagation();
  };

  const handleUpdateButtonClick = (event) => {
    event.stopPropagation();

    if (status === 'prices') {
      onSetType('update');
      onUpdate(id, category, name, price);
    } else if (status === 'partners') {
      onUpdate(id, address, name, phoneNumber, bizNo);
    }
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
            {status === 'partners' && !isApprove && (
              <MenuButton type="button" onClick={handleApproveButtonClick}>
                승인
              </MenuButton>
            )}
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
