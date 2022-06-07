import React, { useState } from "react"
import { Box, TextField } from "@mui/material"
import { DateRangePicker, DateRange, StaticDateRangePicker } from "@mui/lab"

export const MuiDateRangerPicker = () => {
  const [value, setvalue] = useState(null)

  return (
    <>
      <Box width='500px'>
        <DateRangePicker
          startText='Check-in'
          endText='Check-out'
          value={value}
          onChange={(newvalue) => setvalue(newvalue)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}>to</Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box>
    </>
  )
}
