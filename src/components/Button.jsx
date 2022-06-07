import React, { useState } from "react"
import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { Send, FormatUnderlined, FormatItalic, FormatBold } from "@mui/icons-material"

const MuiButton = () => {
  const [formats, setFormats] = useState([])

  //  const handleFormateChnage = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string) => {
  //    setFormats(updatedFormats)
  //  }
  const handleFormateChnage = () => {}
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
          <Button variant='text' href='https://google.com'>
            See More
          </Button>
          <Button variant='contained'>See More</Button>
          <Button variant='outlined'>See More</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
          <Button variant='contained' color='primary'>
            Primary
          </Button>
          <Button variant='contained' color='secondary'>
            Secondary
          </Button>
          <Button variant='contained' color='error'>
            error
          </Button>
          <Button variant='contained' color='warning'>
            warning
          </Button>
          <Button variant='contained' color='info'>
            info
          </Button>
          <Button variant='contained' color='success'>
            sucess
          </Button>
        </Stack>

        {/*<Stack display='block' spacing={2} direction='row'>*/}
        <Stack spacing={2} direction='row'>
          <Button variant='contained' size='small'>
            small
          </Button>
          <Button variant='contained' size='medium'>
            medium
          </Button>
          <Button variant='contained' size='large'>
            large
          </Button>
        </Stack>

        {/* add icon in button */}
        <Stack spacing={2} direction='row'>
          <Button variant='contained' startIcon={<Send />}>
            Send
          </Button>
          <Button variant='contained' endIcon={<Send />}>
            Send
          </Button>

          {/* remove hover shandow of button */}
          <Button variant='contained' endIcon={<Send />} disableElevation disableRipple>
            Send
          </Button>

          {/* handle onclick */}
          <Button variant='contained' endIcon={<Send />} disableRipple onClick={() => alert("Clicked")}>
            Send
          </Button>

          {/* button with no text only icon */}
          <IconButton aria-label='send' color='success' size='small'>
            <Send />
          </IconButton>
        </Stack>

        {/* group button */}
        <Stack direction='row'>
          <ButtonGroup variant='contained' orientation='vertical' size='large' color='secondary' aria-aria-label='aligment button group'>
            <Button onClick={() => alert("Left Clicked")}>Left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>

        {/* Toogle button group */}
        <Stack direction='row'>
          <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormateChnage} size='large' color='error' orientation='vertical' exclusive>
            <ToggleButton value='bold' aria-label='bold'>
              <FormatBold />
            </ToggleButton>
            <ToggleButton value='italic' aria-label='italic'>
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value='underlined' aria-label='underline'>
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  )
}

export default MuiButton
