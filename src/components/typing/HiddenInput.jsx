import { forwardRef } from 'react';
import { Box, TextareaAutosize } from '@mui/material';

const HiddenInput = forwardRef(({ value, onChange, disabled = false }, ref) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  
  return (
    <Box sx={{ position: 'absolute' }}>
      <TextareaAutosize
        ref={ref}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        style={{
          opacity: 0,
          height: 0,
          width: 0,
          position: 'absolute',
        }}
        autoFocus
      />
    </Box>
  );
});

HiddenInput.displayName = 'HiddenInput';

export default HiddenInput;