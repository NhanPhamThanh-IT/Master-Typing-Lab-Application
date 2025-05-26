import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Caret = () => {
  return (
    <Box
      component="span"
      sx={{
        position: 'absolute',
        height: '70%',
        width: '2px',
        backgroundColor: 'primary.main',
        left: 0,
        top: '15%',
        animation: `${blinkAnimation} 1s step-end infinite`,
      }}
    />
  );
};

export default Caret;