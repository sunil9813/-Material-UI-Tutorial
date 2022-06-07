import React from "react"
import { Stack, Box, Divider } from "@mui/material"

export const MuiStack = () => {
  return (
    <>
      <Stack sx={{ border: "1px solid black" }} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
        <Box height='100px' width='100px' color='white' bgcolor='success.light' p={2}>
          Simple Box
        </Box>
        <Box height='100px' width='100px' color='white' bgcolor='error.light' p={2}>
          Simple Box
        </Box>
      </Stack>
    </>
  )
}
