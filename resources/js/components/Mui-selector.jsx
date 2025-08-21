import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MuiSelect({ places, selectedPlace, onChange }) {
  return (
    <Box className="selector">
      <FormControl fullWidth>
        <InputLabel id="select-place-label" shrink>Lugar</InputLabel>
        <Select
          labelId="select-place-label"
          id="select-place"
          value={selectedPlace}
          label="Lugar"
          onChange={(event) => onChange(event.target.value)}
          displayEmpty
        >
          <MenuItem value="">Todos</MenuItem>
          {places.map((place, index) => ( // Using the Set collection we've made to generate values for the Selector.
            <MenuItem key={index} value={place}>
              {place}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
