import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface WeightFormProps {
  ingredient?: [string, string];
  setWeight?: Dispatch<SetStateAction<[string, string]>>;
}

export default function WeightForm({ ingredient, setWeight }: WeightFormProps) {
  return (
    <Box className="text-center" component="form" autoComplete="off">
      <FormControl variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          value={ingredient ? ingredient[1] : ""}
          onChange={(e) => {
            if (ingredient !== undefined && setWeight !== undefined)
              setWeight([ingredient[0], e.target.value as string]);
          }}
        />
        <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
      </FormControl>
    </Box>
  );
}
