import { Box, Typography, Divider } from '@mui/material';

const TypingArea = ({
  inputRef,
  userInput,
  isStarted,
  isFinished,
  errorCount,
  handleInputChange,
  handleKeyDown
}) => {
  return (
    <>
      <Divider sx={{ my: 2 }} />

      <Box sx={{ width: '100%', mt: 2 }}>
        <textarea
          ref={inputRef}
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={!isStarted || isFinished}
          placeholder={
            isStarted
              ? "Type exactly what you see above..."
              : isFinished
                ? "Test completed"
                : "Click Start to begin typing"
          }
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1.1rem',
            fontFamily: '"Roboto Mono", monospace',
            borderRadius: '4px',
            border: '1px solid #ddd',
            minHeight: '120px',
            resize: 'none',
            outline: 'none',
            backgroundColor: isStarted ? '#fff' : '#f5f5f5'
          }}
        />
      </Box>

      {/* Error Message */}
      {isStarted && errorCount > 0 && (
        <Box sx={{ mt: 1, color: 'error.main', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
          <span>Typing errors: {errorCount}</span>
          <Typography variant="caption" sx={{ ml: 2, fontStyle: 'italic' }}>
            You must type the correct character to proceed
          </Typography>
        </Box>
      )}
    </>
  );
};

export default TypingArea;