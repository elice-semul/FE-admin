import ClipLoader from 'react-spinners/ClipLoader';

import { ModalLayout, ModalContentContainer, InputContainer, Input, FormButton } from './styled';

const OrderFormModal = ({
  orderInfo,
  onSetOrderInfo,
  onSetIsShowingModal,
  onUpdateButtonClick: handleUpdateButtonClick,
  updateLoading,
}) => {
  const handleModalLayoutClick = (event) => {
    event.stopPropagation();
    onSetIsShowingModal(false);
  };

  const handleModalContentContainerClick = (event) => {
    event.stopPropagation();
  };

  const handleOrderInfoChange = ({ target }) => {
    onSetOrderInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <ModalLayout onClick={handleModalLayoutClick}>
      <ModalContentContainer onClick={handleModalContentContainerClick}>
        <InputContainer>
          <Input
            name="status"
            defaultValue={orderInfo.status}
            type="text"
            placeholder="상태"
            onChange={handleOrderInfoChange}
          />
        </InputContainer>
        <FormButton type="button" onClick={handleUpdateButtonClick}>
          {updateLoading ? <ClipLoader color="#ffffff" size={16} speedMultiplier={1} /> : '수정'}
        </FormButton>
      </ModalContentContainer>
    </ModalLayout>
  );
};

export default OrderFormModal;
