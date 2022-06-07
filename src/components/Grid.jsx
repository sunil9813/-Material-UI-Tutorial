import React from "react"
import { Grid, Box } from "@mui/material"

export const Grids = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs>
          <Box bgcolor='primary.light' p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor='secondary.light' p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor='success.light' p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor='error.light' p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
