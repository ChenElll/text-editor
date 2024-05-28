import { Box, Button } from '@mui/material';

// מיפוי המקלדת לאנגלית, עברית ואמוג'י
const keys = {
  en: 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]:;"\'<>,.?/~`|\\'.split(''),
  he: 'אבגדהוזחטיכלמנסעפצקרשת0123456789!@#$%^&*()_+-={}[]:;"\'<>,.?/~`|\\'.split(''),
  emoji: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺️'],
};

function Keyboard({ updateText, language, deleteLastChar }) {
  const handleKeyClick = (key) => {
    updateText(key);
  };

  return (
    <Box display="flex" flexWrap="wrap">
        {/* מיפוי המפתחות בהתאם לשפה */}
      {keys[language].map((key) => (
        <Button key={key} onClick={() => handleKeyClick(key)} sx={{ border: '1px solid black', margin: '2px' }}>
          {key}
        </Button>
      ))}
      {/* כפתור להוספת רווח */}
      <Button onClick={() => handleKeyClick(' ')} sx={{ border: '1px solid black', margin: '2px' }}>Space</Button>
      {/* כפתור להוספת רווח */}
      <Button onClick={() => handleKeyClick('\n')} sx={{ border: '1px solid black', margin: '2px' }}>Enter</Button>
        {/* כפתור למחיקת התו האחרון */}
      <Button onClick={deleteLastChar} sx={{ border: '1px solid black', margin: '2px' }}>Delete</Button>
    </Box>
  );
}

export default Keyboard;
