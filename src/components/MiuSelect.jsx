import React from "react"
import { Box, TextField, MenuItem } from "@mui/material"

const MiuSelect = () => {
  return (
    <>
      <Box width='250px' mb={4}>
        <TextField label='Select Country' select fullWidth>
          <MenuItem value='NEP'>Nepal </MenuItem>
          <MenuItem value='IN'>India </MenuItem>
          <MenuItem value='USA'>USA </MenuItem>
          <MenuItem value='CH'>China </MenuItem>
        </TextField>
      </Box>

      <Box width='250px'>
        <TextField label='Select Country' select fullWidth size='small' color='secondary' helperText='Plese select your country' error>
          <MenuItem value='NEP'>Nepal </MenuItem>
          <MenuItem value='IN'>India </MenuItem>
          <MenuItem value='USA'>USA </MenuItem>
          <MenuItem value='CH'>China </MenuItem>
        </TextField>
      </Box>
    </>
  )
}

export default MiuSelect
