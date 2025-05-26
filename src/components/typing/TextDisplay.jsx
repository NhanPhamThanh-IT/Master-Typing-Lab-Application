import { Box, Typography } from '@mui/material';
import Caret from './Caret';

const TextDisplay = ({ text, charStates, cursorPosition }) => {
  return (
    <Typography
      variant="body1"
      component="div"
      sx={{
        fontFamily: 'monospace',
        fontSize: '1.5rem',
        lineHeight: 1.6,
        position: 'relative',
        letterSpacing: '0.05em',
        wordBreak: 'break-word'
      }}
    >
      {text.split('').map((char, index) => {
        let color = 'inherit';
        if (charStates[index] === 'correct') {
          color = 'success.main';
        } else if (charStates[index] === 'incorrect') {
          color = 'error.main';
        }

        return (
          <Box
            key={index}
            component="span"
            sx={{
              color,
              position: 'relative',
              display: 'inline-block',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
            {index === cursorPosition && <Caret />}
          </Box>
        );
      })}
    </Typography>
  );
};

export default TextDisplay;