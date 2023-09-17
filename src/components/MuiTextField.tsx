import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
const MuiTextField = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value,setValue] = useState<string>('')
  const changeVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          variant="outlined"
          color="secondary"
          size="small"
          required 
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          error={!value}
          helperText={!value? "Required": "Dont share your password"}
        />
        <TextField
          label="Form Input"
          helperText="Dont share your password"
          type="password"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="password"
          error
          type={isVisible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={changeVisibility}
                style={{ cursor: "pointer" }}
              >
                {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
