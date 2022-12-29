import { useState } from 'react';

import { PartnerBoard, Spinner } from '@/components';
import { usePartners } from '@/hooks';
import PortalNoti from '@/portals/portalNoti';
import PortalPartnerForm from '@/portals/portalPartnerForm';
import { BoardContainer } from '@/styles/board';

const Partners = ({ status }) => {
  const [partnerInfo, setPartnerInfo] = useState({
    id: '',
    name: '',
    address: {
      roadAddr: '',
      detailAddr: '',
      jibun: '',
    },
    phoneNumber: '',
    bizNo: '',
  });
  const {
    isShowingNotiModal,
    setIsShowingNotiModal,
    isShowingFormModal,
    setIsShowingFormModal,
    data,
    isLoading,
    createPartnerApprove,
    updatePartner,
    removePartner,
  } = usePartners();

  if (isLoading) {
    return (
      <BoardContainer>
        <Spinner />
      </BoardContainer>
    );
  }

  if (!data) {
    return null;
  }

  const handleApproveButtonClick = (id) => {
    createPartnerApprove.mutate({ id });
  };

  const handleUpdateButtonClick = (id, address, name, phoneNumber, bizNo) => {
    const { roadAddr, detailAddr, jibun } = address;

    setIsShowingFormModal(true);
    setPartnerInfo({ id, name, address: { roadAddr, detailAddr, jibun }, phoneNumber, bizNo });
  };

  const handleModalUpdateButtonClick = () => {
    const { id, name, address, phoneNumber, bizNo } = partnerInfo;

    if (
      !id ||
      !name ||
      (!address.roadAddr && !address.detailAddr && !address.jibun) ||
      !phoneNumber ||
      !bizNo
    ) {
      return;
    }

    updatePartner.mutate({ id, name, address, phoneNumber, bizNo });
  };

  const handleRemoveButtonClick = (id) => {
    removePartner.mutate({ id });
    setIsShowingNotiModal(true);
  };

  return (
    <>
      <PartnerBoard
        {...{ data }}
        {...{ status }}
        onApprove={handleApproveButtonClick}
        onUpdate={handleUpdateButtonClick}
        onRemove={handleRemoveButtonClick}
      />
      {isShowingNotiModal && (
        <PortalNoti onSetIsShowingModal={setIsShowingNotiModal} text="파트너가 삭제되었습니다." />
      )}
      {isShowingFormModal && (
        <PortalPartnerForm
          {...{ partnerInfo }}
          onSetPartnerInfo={setPartnerInfo}
          onSetIsShowingModal={setIsShowingFormModal}
          onUpdateButtonClick={handleModalUpdateButtonClick}
          updateLoading={updatePartner.isLoading}
        />
      )}
    </>
  );
};

export default Partners;
