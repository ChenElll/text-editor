import React from 'react';
import { Box } from '@mui/material';

function TextEditor({ text }) {
  return (
    <Box 
      sx={{ 
        border: '1px solid black', 
        padding: '16px', 
        minHeight: '200px', 
        textAlign: 'left' // שינוי לכיוון שמאל
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
