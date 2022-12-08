import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';

export default function Sorting() {
  const [sorting, setSorting] = React.useState('');

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

    return (
      <Box sx={{display: "flex",justifyContent:"end" }}>
    <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">Sort by</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sorting}
        label="Sortby"
        onChange={handleChange}
      >
        <MenuItem value="">
          <span>Sort by</span>
              </MenuItem>
                 {/* <MenuItem disabled value={""}></MenuItem> */}
        <MenuItem value={"ace"}>Price: Low to High</MenuItem>
        <MenuItem value={"des"}>Price: High to Low</MenuItem>
     
      </Select>
    </FormControl>
  </Box>);
}