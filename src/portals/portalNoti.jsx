import ReactDOM from 'react-dom';

import { NotiModal } from '@/components';

const PortalNoti = ({ ...props }) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<NotiModal {...props} />, modalRoot);
};

export default PortalNoti;
