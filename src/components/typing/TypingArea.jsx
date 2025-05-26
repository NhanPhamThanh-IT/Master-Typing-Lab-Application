import { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import TextDisplay from './TextDisplay';
import HiddenInput from './HiddenInput';
import ErrorCounter from './ErrorCounter';

const TypingArea = ({ onReset }) => {
  const sampleText = "The quick brown fox jumps over the lazy dog.";
  const [input, setInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [errors, setErrors] = useState(0);
  const [charStates, setCharStates] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    setCharStates(Array(sampleText.length).fill('pending'));
  }, [sampleText]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (value) => {
    setInput(value);
    setCursorPosition(value.length);

    const newCharStates = [...charStates];
    let errorCount = 0;

    for (let i = 0; i < sampleText.length; i++) {
      if (i < value.length) {
        if (value[i] === sampleText[i]) {
          newCharStates[i] = 'correct';
        } else {
          newCharStates[i] = 'incorrect';
          errorCount++;
        }
      } else {
        newCharStates[i] = 'pending';
      }
    }

    setErrors(errorCount);
    setCharStates(newCharStates);
  };

  const handleAreaClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleReset = () => {
    setInput('');
    setCursorPosition(0);
    setErrors(0);
    setCharStates(Array(sampleText.length).fill('pending'));
    onReset();
  };

  const isCompleted = input.length >= sampleText.length;

  return (
    <Box>
      <Box
        onClick={handleAreaClick}
        sx={{
          py: 4,
          px: 2,
          cursor: 'text',
          borderRadius: 1,
          border: '1px solid #e0e0e0',
          backgroundColor: '#f9f9f9',
          position: 'relative',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3
        }}
      >
        <HiddenInput
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          disabled={isCompleted}
        />
        <TextDisplay
          text={sampleText}
          charStates={charStates}
          cursorPosition={cursorPosition}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ErrorCounter count={errors} />

        <Button
          variant="outlined"
          onClick={handleReset}
          color="secondary"
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default TypingArea;