import React from "react"
import { Box, FormControlLabel, Switch } from "@mui/material"

export const MuiSwitch = () => {
  return (
    <>
      <Box>
        <FormControlLabel label='Dark Mode' control={<Switch />}></FormControlLabel>
      </Box>
    </>
  )
}
