import React from 'react';
import { Box } from '@mui/material';

function TextEditor({ text }) {
  return (
    <Box
      component="div"
      sx={{
        border: '1px solid black',
        minHeight: '200px',
        padding: '10px',
        whiteSpace: 'pre-wrap',
      }}
    >
      {text.map((item, index) => (
        <span key={index} style={item.style}>
          {item.char}
        </span>
      ))}
    </Box>
  );
}

export default TextEditor;
