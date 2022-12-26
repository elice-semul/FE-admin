import {
  ModalTitle,
  ModalDesc,
  ButtonContainer,
  ModalButton,
  ModalLayout,
  ModalContentContainer,
} from './styled';

const Modal = ({ onSetIsShowingModal, error }) => {
  const handleModalLayoutClick = (event) => {
    event.stopPropagation();
    onSetIsShowingModal(false);
  };

  const handleModalContentContainer = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalLayout onClick={handleModalLayoutClick}>
      <ModalContentContainer onClick={handleModalContentContainer}>
        <ModalTitle>{error.message}</ModalTitle>
        <ModalDesc>{error.message}</ModalDesc>
        <ButtonContainer>
          <ModalButton type="button" onClick={handleModalLayoutClick}>
            확인
          </ModalButton>
        </ButtonContainer>
      </ModalContentContainer>
    </ModalLayout>
  );
};

export default Modal;
