import { Spinner, UserBoard } from '@/components';
import { useUsers } from '@/hooks';
import PortalNoti from '@/portals/portalNoti';
import { BoardContainer } from '@/styles/board';

const Users = ({ status }) => {
  const { isShowingModal, setIsShowingModal, data, isLoading, removeUser } = useUsers();

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

  const handleRemoveButtonClick = (id) => {
    removeUser.mutate({ id });
    setIsShowingModal(true);
  };

  return (
    <>
      <UserBoard {...{ data }} {...{ status }} onRemove={handleRemoveButtonClick} />
      {isShowingModal && (
        <PortalNoti onSetIsShowingModal={setIsShowingModal} text="유저가 삭제되었습니다." />
      )}
    </>
  );
};

export default Users;
