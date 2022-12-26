import DotLoader from 'react-spinners/DotLoader ';

import { SpinnerContainer } from './styled';

import { theme } from '@/styles/theme';

const Spinner = ({
  spinnerColor = theme.colors.primary,
  spinnerSize = 32,
  spinnerMultiplier = 1,
}) => {
  return (
    <SpinnerContainer>
      <DotLoader color={spinnerColor} size={spinnerSize} speedMultiplier={spinnerMultiplier} />
    </SpinnerContainer>
  );
};

export default Spinner;
