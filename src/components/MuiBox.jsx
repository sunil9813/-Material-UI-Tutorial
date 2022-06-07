import { Box } from "@mui/material"
import React from "react"

export const MuiBox = () => {
  return (
    <>
      <Box
        component='section'
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
            transition: "0.5s",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          },
        }}
      >
        Hover Box One
      </Box>

      <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2} mt={5}>
        Simple Box
      </Box>
    </>
  )
}
