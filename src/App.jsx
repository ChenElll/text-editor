import { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
// ייבוא הקומפוננטות TextEditor, Toolbar, Keyboard
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import Keyboard from './Keyboard';

function App() {
  const [text, setText] = useState([]);
  const [history, setHistory] = useState([]);
  const [language, setLanguage] = useState("en");
  const [style, setStyle] = useState({
    fontSize: '16px',
    fontFamily: 'Arial',
    color: 'black',
    textTransform: 'none',
    fontWeight: 'normal',
    textDecoration: 'none',
    fontStyle: 'normal',
  });

  // פונקציה לעדכון הטקסט עם תו חדש
  const updateText = (newChar) => {
    setHistory((prev) => [...prev, [...text]]);
    setText((prev) => [...prev, { char: newChar, style }]);
  };

 // פונקציה לביטול השינוי האחרון
  const undo = () => {
    if (history.length > 0) {
      setText(history[history.length - 1]);
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  // פונקציה לניקוי כל הטקסט
  const clearAll = () => {
    setHistory((prev) => [...prev, [...text]]);
    setText([]);
  };

    // פונקציה להפיכת כל הטקסט לאותיות קטנות
  const lowerAll = () => {
    setText((prev) =>
      prev.map((item) => ({ ...item, char: item.char.toLowerCase(), style: { ...item.style, textTransform: 'lowercase' } }))
    );
    setStyle((prev) => ({ ...prev, textTransform: 'lowercase' }));
  };

  // פונקציה להפיכת כל הטקסט לאותיות גדולות
  const upperAll = () => {
    setText((prev) =>
      prev.map((item) => ({ ...item, char: item.char.toUpperCase(), style: { ...item.style, textTransform: 'uppercase' } }))
    );
    setStyle((prev) => ({ ...prev, textTransform: 'uppercase' }));
  };

  // פונקציה למחיקת התו האחרון
  const deleteLastChar = () => {
    setHistory((prev) => [...prev, [...text]]);
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Text Editor
      </Typography>
      <Toolbar 
        setStyle={setStyle} 
        setLanguage={setLanguage} 
        clearAll={clearAll}
        lowerAll={lowerAll}
        upperAll={upperAll}
        undo={undo}
        style={style}
      />
      <Box mt={2} sx={{ textAlign: 'left' }}>
        <TextEditor text={text} />
      </Box>
      <Keyboard updateText={updateText} language={language} deleteLastChar={deleteLastChar} />
    </Container>
  );
}

export default App;
