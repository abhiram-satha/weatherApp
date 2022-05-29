import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchInput({submitPostalCode}) {



  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
      onSubmit={(event)=>submitPostalCode(event)}
    >
      <div>

        <TextField
          id="standard-search"
          label="Postal Code"
          type="search"
          variant="standard"
          
        />

      </div>
    </Box>
  );
}
