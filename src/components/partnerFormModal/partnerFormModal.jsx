import ClipLoader from 'react-spinners/ClipLoader';

import { ModalLayout, ModalContentContainer, InputContainer, Input, FormButton } from './styled';

const PartnerFormModal = ({
  partnerInfo,
  onSetPartnerInfo,
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

  const handlePartnerInfoChange = ({ target }) => {
    onSetPartnerInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handlePartnerAddressChange = ({ target }) => {
    onSetPartnerInfo((prev) => ({
      ...prev,
      address: { ...prev.address, [target.name]: target.value },
    }));
  };

  return (
    <ModalLayout onClick={handleModalLayoutClick}>
      <ModalContentContainer onClick={handleModalContentContainerClick}>
        <InputContainer>
          <Input
            name="name"
            defaultValue={partnerInfo.name}
            type="text"
            placeholder="이름"
            onChange={handlePartnerInfoChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="phoneNumber"
            type="text"
            defaultValue={partnerInfo.phoneNumber}
            placeholder="전화 번호"
            onChange={handlePartnerInfoChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="roadAddr"
            type="text"
            defaultValue={partnerInfo.address.roadAddr}
            placeholder="주소"
            onChange={handlePartnerAddressChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="detailAddr"
            type="text"
            defaultValue={partnerInfo.address.detailAddr}
            placeholder="상세 주소"
            onChange={handlePartnerAddressChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="jibun"
            type="text"
            defaultValue={partnerInfo.address.jibun}
            placeholder="지번"
            onChange={handlePartnerAddressChange}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="bizNo"
            type="text"
            defaultValue={partnerInfo.bizNo}
            placeholder="사업 번호"
            onChange={handlePartnerInfoChange}
          />
        </InputContainer>
        <FormButton type="button" onClick={handleUpdateButtonClick}>
          {updateLoading ? <ClipLoader color="#ffffff" size={16} speedMultiplier={1} /> : '수정'}
        </FormButton>
      </ModalContentContainer>
    </ModalLayout>
  );
};

export default PartnerFormModal;
