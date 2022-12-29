import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { SearchContainer, Search, SearchButton } from './styled';

import { OrderBoard, Spinner } from '@/components';
import { useOrders } from '@/hooks';
import PortalNoti from '@/portals/portalNoti';
import PortalOrderForm from '@/portals/portalOrderForm';
import { BoardContainer } from '@/styles/board';
import { theme } from '@/styles/theme';

const Orders = ({ status }) => {
  const [orderInfo, setOrderInfo] = useState({
    id: '',
    status: '',
  });
  const [search, setSearch] = useState('');

  const {
    isShowingNotiModal,
    setIsShowingNotiModal,
    isShowingFormModal,
    setIsShowingFormModal,
    data,
    isLoading,
    refetch,
    updateOrder,
    removeOrder,
  } = useOrders(search);

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

  const handleSearchChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSearchButtonClick = () => {
    refetch();
  };

  const handleUpdateButtonClick = (id, status) => {
    setIsShowingFormModal(true);
    setOrderInfo({ id, status });
  };

  const handleModalUpdateButtonClick = () => {
    const { id, status } = orderInfo;

    if (!id || !status) {
      return;
    }

    updateOrder.mutate({ id, status });
  };

  const handleRemoveButtonClick = (id) => {
    removeOrder.mutate({ id });
  };

  return (
    <>
      <OrderBoard
        {...{ data }}
        {...{ status }}
        onUpdate={handleUpdateButtonClick}
        onRemove={handleRemoveButtonClick}
      />
      {status === 'orders' && (
        <SearchContainer>
          <Search type="text" placeholder="이메일을 입력해주세요." onChange={handleSearchChange} />
          <SearchButton type="button" onClick={handleSearchButtonClick}>
            <AiOutlineSearch color={theme.colors.background} size="3.2rem" />
          </SearchButton>
        </SearchContainer>
      )}
      {isShowingNotiModal && (
        <PortalNoti onSetIsShowingModal={setIsShowingNotiModal} text="주문이 삭제되었습니다." />
      )}
      {isShowingFormModal && (
        <PortalOrderForm
          {...{ orderInfo }}
          onSetOrderInfo={setOrderInfo}
          onSetIsShowingModal={setIsShowingFormModal}
          onUpdateButtonClick={handleModalUpdateButtonClick}
          updateLoading={updateOrder.isLoading}
        />
      )}
    </>
  );
};

export default Orders;
