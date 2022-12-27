import ReactDOM from 'react-dom';

import { PriceFormModal } from '@/components';

const PortalPriceForm = ({ ...props }) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<PriceFormModal {...props} />, modalRoot);
};

export default PortalPriceForm;
