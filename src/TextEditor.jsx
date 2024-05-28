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
      {/* מיפוי של המערך text לצורך הצגת כל פריט כאלמנט span */}
      {text.map((item, index) => (
           // אלמנט span עם מפתח ייחודי ועיצוב אישי
        <span key={index} style={item.style}>
          {item.char}
        </span>
      ))}
    </Box>
  );
}

export default TextEditor;
