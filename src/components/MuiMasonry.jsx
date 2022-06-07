import React from "react"
import { Box, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import { Masonry } from "@mui/lab"
import { ExpandMore } from "@mui/icons-material"

const height = [150, 30, 90, 70, 110, 200, 300, 150, 180, 175, 100]
export const MuiMasonry = () => {
  return (
    <>
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {height.map((height, index) => (
            <Paper key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height, border: "1px solid" }}>
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Box>

      <Box sx={{ width: 500, minHeight: 400 }} mt={5}>
        <Masonry columns={4} spacing={1}>
          {height.map((height, index) => (
            <Paper key={index} sx={{ border: "1px solid" }}>
              <Accordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </>
  )
}
