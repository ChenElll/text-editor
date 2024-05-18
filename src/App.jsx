import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
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

  const updateText = (newChar) => {
    setHistory((prev) => [...prev, [...text]]);
    setText((prev) => [...prev, { char: newChar, style }]);
  };

  const undo = () => {
    if (history.length > 0) {
      setText(history[history.length - 1]);
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  const clearAll = () => {
    setHistory((prev) => [...prev, [...text]]);
    setText([]);
  };

  const lowerAll = () => {
    setText((prev) =>
      prev.map((item) => ({ ...item, char: item.char.toLowerCase(), style: { ...item.style, textTransform: 'lowercase' } }))
    );
    setStyle((prev) => ({ ...prev, textTransform: 'lowercase' }));
  };

  const upperAll = () => {
    setText((prev) =>
      prev.map((item) => ({ ...item, char: item.char.toUpperCase(), style: { ...item.style, textTransform: 'uppercase' } }))
    );
    setStyle((prev) => ({ ...prev, textTransform: 'uppercase' }));
  };

  const deleteLastChar = () => {
    setHistory((prev) => [...prev, [...text]]);
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <Container>
      <Toolbar 
        setStyle={setStyle} 
        setLanguage={setLanguage} 
        clearAll={clearAll}
        lowerAll={lowerAll}
        upperAll={upperAll}
        undo={undo}
        style={style}
      />
      <Box mt={2}>
        <TextEditor text={text} />
      </Box>
      <Keyboard updateText={updateText} language={language} deleteLastChar={deleteLastChar} />
    </Container>
  );
}

export default App;
