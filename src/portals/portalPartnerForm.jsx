import ReactDOM from 'react-dom';

import { PartnerFormModal } from '@/components';

const PortalPartnerForm = ({ ...props }) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<PartnerFormModal {...props} />, modalRoot);
};

export default PortalPartnerForm;
