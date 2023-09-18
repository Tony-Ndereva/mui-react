import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const MuiSelect = () => {
  const [country, setCountry] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  return (
    <Box width='250px'>
      <TextField 
        label="select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">INDIA</MenuItem>
        <MenuItem value="KE">KENYA</MenuItem>
        <MenuItem value="TZ">TANZANIA</MenuItem>
        <MenuItem value="UG">UGANDA</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
