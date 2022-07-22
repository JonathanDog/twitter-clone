import { useState } from 'react';
import { Button, Grid, TextField, createTheme, ThemeProvider } from '@mui/material';
import { PillButton } from './PillButton';

let theme = createTheme({
  shape: {
    pillRadius: 50,
  },
});

export default function Input({
  handleSetValue,
  placeholder,
  displayButton,
  buttonText,
  multiline,
  rows,
  close
}) {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      handleSetValue(value);
    }
  }

  function handleClick() {
    handleSetValue(value);
    close()  
    setValue('');
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          multiline={multiline}
          rows={rows}
          placeholder={placeholder}
          variant='filled'
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          fullWidth
          color='primary'
          sx={{
            input: {
              color: 'white',
              background: '#1b2836',
            },
            textarea: {
              color: 'white',
              background: '#1b2836',
            },
          }}
        />
      </Grid>
      <Grid item>
        {displayButton ? (
          <ThemeProvider theme={theme}>
          <PillButton
            onClick={handleClick}
            style={{
              backgroundColor: '#1d9bf0',
              paddingLeft: 50,
              paddingRight: 50,
              'text-transform': 'none',
              'font-weight': 'bold',
            }}
            variant='contained'
            pill
            size='large'
          >
            {buttonText}
          </PillButton>
        </ThemeProvider>
        ) : null}
        
      </Grid>
    </Grid>
  );
}


