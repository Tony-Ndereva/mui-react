import { Stack, TextField } from "@mui/material";
const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label='Name' variant="outlined"/>
        <TextField label='Name' variant="filled"/>
        <TextField label='Name' variant="standard"/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label='Small Secondary' variant="outlined"/>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
