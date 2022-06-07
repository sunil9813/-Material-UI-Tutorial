import React, { useState } from "react"
import { Stack, TextField } from "@mui/material"
import { DatePicker, TimePicker, DateTimePicker } from "@mui/lab"

export const MuiPicker = () => {
  const [selectDatas, setselectDatas] = useState(null)
  const [selectTimes, setselectTimes] = useState(null)
  const [selectDateTimes, setselectDateTimes] = useState(null)
  console.log(selectDatas)
  console.log(selectTimes)
  console.log(selectDateTimes)
  return (
    <>
      <Stack spacing={4} sx={{ width: "250px" }} mt={5}>
        <DatePicker label='Data Picker' renderInput={(params) => <TextField {...params} />} value={selectDatas} onChange={(newValues) => setselectDatas(newValues)} />

        <TimePicker label='Time Picker' renderInput={(params) => <TextField {...params} />} value={selectTimes} onChange={(newValues) => setselectTimes(newValues)} />

        <DateTimePicker label='Date Time Picker' renderInput={(params) => <TextField {...params} />} value={selectDateTimes} onChange={(newValues) => setselectDateTimes(newValues)} />
      </Stack>
    </>
  )
}
