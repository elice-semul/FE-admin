import ReactDOM from 'react-dom';

import { RemoveNotiModal } from '@/components';

const PortalRemoveNoti = ({ ...props }) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<RemoveNotiModal {...props} />, modalRoot);
};

export default PortalRemoveNoti;
