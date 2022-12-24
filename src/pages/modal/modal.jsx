import {
  StyledModalTitle,
  StyledModalDesc,
  StyledButtonContainer,
  StyledModalButton,
  StyledModalLayout,
  StyledModalContentContainer,
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
    <StyledModalLayout onClick={handleModalLayoutClick}>
      <StyledModalContentContainer onClick={handleModalContentContainer}>
        <StyledModalTitle>{error.message}</StyledModalTitle>
        <StyledModalDesc>{error.message}</StyledModalDesc>
        <StyledButtonContainer>
          <StyledModalButton type="button" onClick={handleModalLayoutClick}>
            확인
          </StyledModalButton>
        </StyledButtonContainer>
      </StyledModalContentContainer>
    </StyledModalLayout>
  );
};

export default Modal;
