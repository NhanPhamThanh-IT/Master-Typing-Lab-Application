import { Box } from '@mui/material';

const TextDisplay = ({ currentText, userInput, isStarted }) => {
  // Highlight correct/incorrect characters in the original text
  const getHighlightedText = () => {
    if (!userInput) return currentText;

    return currentText.split('').map((char, index) => {
      if (index >= userInput.length) {
        return <span key={index} className="not-typed">{char}</span>; // Not typed yet
      }
      if (char === userInput[index]) {
        return <span key={index} className="correct-char" style={{ color: 'green' }}>{char}</span>; // Correct
      }
      return <span key={index} className="incorrect-char" style={{ color: 'red', textDecoration: 'underline' }}>{char}</span>; // Incorrect
    });
  };

  // Hiển thị ký tự cần gõ tiếp theo nổi bật
  const getCurrentCharHighlight = () => {
    const position = userInput?.length || 0;
    if (position >= currentText.length) return null;

    return (
      <Box sx={{ mt: 2, p: 1, textAlign: 'center', backgroundColor: 'rgba(25, 118, 210, 0.1)', borderRadius: 1 }}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1976d2',
          padding: '0 8px',
          backgroundColor: 'rgba(25, 118, 210, 0.2)',
          borderRadius: '4px'
        }}>
          {currentText[position] === ' ' ? '␣' : currentText[position]}
        </span>
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          p: 3,
          mb: 3,
          backgroundColor: '#f8f9fa',
          borderRadius: 1,
          borderLeft: '4px solid',
          borderLeftColor: 'primary.main',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          fontFamily: '"Roboto Mono", monospace',
          minHeight: '100px'
        }}
      >
        {isStarted ? getHighlightedText() : currentText}
      </Box>

      {/* Hiển thị ký tự cần gõ tiếp theo */}
      {isStarted && getCurrentCharHighlight()}
    </>
  );
};

export default TextDisplay;