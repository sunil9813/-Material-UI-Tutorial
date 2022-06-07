import React from "react"
import { Box } from "@mui/material"

const MuiResponsive = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0
            sm: 200, // 600
            md: 300, // 900
            lg: 400, // 1200
            xs: 500, // 1536
          },
          bgcolor: "primary.main",
        }}
      ></Box>
    </>
  )
}

export default MuiResponsive
