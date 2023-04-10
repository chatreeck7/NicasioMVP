import {
    Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React from "react";

export default function WeightForm() {
  return (
    <Box component="form" autoComplete="off">
      <FormControl variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
        <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
      </FormControl>
    </Box>
  );
}
