import { useState } from 'react';

import { AddButton } from './styled';

import { PriceBoard, Spinner } from '@/components';
import { usePrices } from '@/hooks';
import PortalNoti from '@/portals/portalNoti';
import PortalPriceForm from '@/portals/portalPriceForm';
import { BoardContainer } from '@/styles/board';

const Prices = ({ status }) => {
  const [type, setType] = useState('create');
  const [priceInfo, setPriceInfo] = useState({
    id: '',
    category: '',
    name: '',
    price: '',
  });
  const {
    isShowingModal,
    setIsShowingModal,
    isShowingNotiModal,
    setIsShowingNotiModal,
    data,
    isLoading,
    createPrice,
    updatePrice,
    removePrice,
  } = usePrices();

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

  const handleAddFormSubmit = ({ category, name, price }) => {
    if (!category || !name || !price) {
      return;
    }

    createPrice.mutate({ category, name, price });
  };

  const handleUpdateButtonClick = (id, category, name, price) => {
    setIsShowingModal(true);
    setPriceInfo({ id, category, name, price });
  };

  const handleModalUpdateButtonClick = () => {
    const { id, category, name, price } = priceInfo;

    if (!id || !category || !name || !price) {
      return;
    }

    updatePrice.mutate({ id, category, name, price });
  };

  const handleAddButtonClick = () => {
    setType('create');
    setIsShowingModal(true);
  };

  const handleRemoveButtonClick = (id) => {
    removePrice.mutate({ id });
  };

  return (
    <>
      <PriceBoard
        {...{ data }}
        {...{ status }}
        onSetType={setType}
        onUpdate={handleUpdateButtonClick}
        onRemove={handleRemoveButtonClick}
      />
      <AddButton type="button" onClick={handleAddButtonClick}>
        상품 등록
      </AddButton>
      {isShowingNotiModal && (
        <PortalNoti onSetIsShowingModal={setIsShowingNotiModal} text="상품이 삭제되었습니다." />
      )}
      {isShowingModal && (
        <PortalPriceForm
          {...{ priceInfo }}
          onSetPriceInfo={setPriceInfo}
          onSetIsShowingModal={setIsShowingModal}
          onAddFormSubmit={handleAddFormSubmit}
          onUpdateButtonClick={handleModalUpdateButtonClick}
          createLoading={createPrice.isLoading}
          updateLoading={updatePrice.isLoading}
          {...{ type }}
        />
      )}
    </>
  );
};

export default Prices;
