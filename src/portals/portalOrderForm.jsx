import ReactDOM from 'react-dom';

import { OrderFormModal } from '@/components';

const PortalOrderForm = ({ ...props }) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<OrderFormModal {...props} />, modalRoot);
};

export default PortalOrderForm;
