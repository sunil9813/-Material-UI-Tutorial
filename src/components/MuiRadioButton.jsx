import React from "react"
import { Box, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material"

const MuiRadioButton = () => {
  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Years of Experience</FormLabel>

          <RadioGroup name='job-experience-group' aria-label='job-experience-group-label'>
            <FormControlLabel control={<Radio color='secondary' size='small' />} label='0-2' value='0-2' />
            <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
            <FormControlLabel control={<Radio />} label='5-7' value='5-7' />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}

export default MuiRadioButton
