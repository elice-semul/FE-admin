import ClipLoader from 'react-spinners/ClipLoader';

import {
  ModalDesc,
  ButtonContainer,
  ModalButton,
  ModalLayout,
  ModalContentContainer,
} from './styled';

const RemoveNotiModal = ({ onSetIsShowingModal, text, removeLoading, onRemove }) => {
  const handleModalLayoutClick = (event) => {
    event.stopPropagation();
    onSetIsShowingModal(false);
  };

  const handleModalContentContainer = (event) => {
    event.stopPropagation();
  };

  const handleRemoveButtonClick = (event) => {
    event.stopPropagation();
    onRemove();
  };

  return (
    <ModalLayout onClick={handleModalLayoutClick}>
      <ModalContentContainer onClick={handleModalContentContainer}>
        <ModalDesc>{text}</ModalDesc>
        <ButtonContainer>
          <ModalButton type="button" onClick={handleModalLayoutClick}>
            취소
          </ModalButton>
          <ModalButton type="button" onClick={handleRemoveButtonClick}>
            {removeLoading ? <ClipLoader color="#ffffff" size={16} speedMultiplier={1} /> : '확인'}
          </ModalButton>
        </ButtonContainer>
      </ModalContentContainer>
    </ModalLayout>
  );
};

export default RemoveNotiModal;
