import React from 'react';
import { Box, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function Toolbar({ setStyle, setLanguage, clearAll, lowerAll, upperAll, undo, style }) {
  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    setStyle((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      <FormControl>
        <InputLabel>Font Size</InputLabel>
        <Select name="fontSize" value={style.fontSize} onChange={handleStyleChange}>
          <MenuItem value="12px">12px</MenuItem>
          <MenuItem value="16px">16px</MenuItem>
          <MenuItem value="20px">20px</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Font Family</InputLabel>
        <Select name="fontFamily" value={style.fontFamily} onChange={handleStyleChange}>
          <MenuItem value="Arial">Arial</MenuItem>
          <MenuItem value="Courier New">Courier New</MenuItem>
          <MenuItem value="Times New Roman">Times New Roman</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Color</InputLabel>
        <Select name="color" value={style.color} onChange={handleStyleChange}>
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
      </FormControl>

      <Button 
        onClick={() => setStyle((prev) => ({ ...prev, fontWeight: prev.fontWeight === 'bold' ? 'normal' : 'bold' }))}
        variant={style.fontWeight === 'bold' ? 'contained' : 'outlined'}
      >
        Bold
      </Button>
      <Button 
        onClick={() => setStyle((prev) => ({ ...prev, textDecoration: prev.textDecoration === 'underline' ? 'none' : 'underline' }))}
        variant={style.textDecoration === 'underline' ? 'contained' : 'outlined'}
      >
        Underline
      </Button>
      <Button 
        onClick={() => setStyle((prev) => ({ ...prev, fontStyle: prev.fontStyle === 'italic' ? 'normal' : 'italic' }))}
        variant={style.fontStyle === 'italic' ? 'contained' : 'outlined'}
      >
        Italic
      </Button>

      <Button 
        onClick={() => setStyle((prev) => ({ ...prev, textTransform: prev.textTransform === 'uppercase' ? 'none' : 'uppercase' }))}
        variant={style.textTransform === 'uppercase' ? 'contained' : 'outlined'}
      >
        Uppercase
      </Button>
      <Button 
        onClick={() => setStyle((prev) => ({ ...prev, textTransform: prev.textTransform === 'lowercase' ? 'none' : 'lowercase' }))}
        variant={style.textTransform === 'lowercase' ? 'contained' : 'outlined'}
      >
        Lowercase
      </Button>

      <FormControl>
        <InputLabel>Language</InputLabel>
        <Select value={style.language} onChange={handleLanguageChange}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="he">Hebrew</MenuItem>
          <MenuItem value="emoji">Emoji</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={clearAll}>Clear All</Button>
      <Button onClick={lowerAll}>Lower All</Button>
      <Button onClick={upperAll}>Upper All</Button>
      <Button onClick={undo}>Undo</Button>
    </Box>
  );
}

export default Toolbar;
