import { useState } from 'react';

import { AddButton } from './styled';

import { PriceBoard, Spinner } from '@/components';
import { usePrices } from '@/hooks';
import PortalPriceForm from '@/portals/portalPriceForm';
import { BoardContainer } from '@/styles/board';

const Prices = ({ status }) => {
  const [type, setType] = useState('create');
  const [updateInfo, setUpdateInfo] = useState({
    id: '',
    category: '',
    name: '',
    price: '',
  });
  const {
    isShowingModal,
    setIsShowingModal,
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
    setUpdateInfo({ id, category, name, price });
  };

  const handleModalUpdateButtonClick = () => {
    const { id, category, name, price } = updateInfo;

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
      {isShowingModal && (
        <PortalPriceForm
          {...{ updateInfo }}
          onSetUpdateInfo={setUpdateInfo}
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
