import { Spinner, UserBoard } from '@/components';
import { useUsers } from '@/hooks';
import PortalModal from '@/portals/portalModal';
import { ContentList } from '@/styles/content';

const Users = ({ status }) => {
  const { isShowingModal, setIsShowingModal, data, isLoading, removeUser } = useUsers();

  if (isLoading) {
    return (
      <ContentList>
        <Spinner />
      </ContentList>
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
      <UserBoard {...{ data }} {...{ status }} onRemove={handleRemoveButtonClick} />{' '}
      {isShowingModal && (
        <PortalModal onSetIsShowingModal={setIsShowingModal} text="유저가 삭제되었습니다." />
      )}
    </>
  );
};

export default Users;
