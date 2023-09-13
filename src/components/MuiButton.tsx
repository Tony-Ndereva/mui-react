import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { FormatUnderlined, FormatItalic } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
function MuiButton() {
  const [formats, setFormats] = useState<string[]>([])
  console.log(formats)
  const handleFormatChange = (e:React.MouseEvent<HTMLElement>, updatedFormats: string[])=>{
setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
          onClick={() => alert("clicked")}
        >
          Send
        </Button>

        <IconButton aria-label="send" color="error" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="horizontal"
          size="small"
          color="secondary"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting" value={formats}onChange={handleFormatChange}>
          <ToggleButton value="bold" aria-label="bold" >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
