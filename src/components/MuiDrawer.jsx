import React, { useState } from "react"
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import { Menu } from "@mui/icons-material"

export const MuiDrawer = () => {
  const [isDraweOpen, setIsDraweOpen] = useState(false)
  return (
    <>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDraweOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor='left' open={isDraweOpen} onClose={() => setIsDraweOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h6' component='div'>
            Side Panle
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
