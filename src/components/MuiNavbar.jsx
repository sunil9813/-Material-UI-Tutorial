import React, { useState } from "react"
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from "@mui/material"
import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material"

export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState()
  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
  }
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Pokemon
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>Features</Button>
            <Button color='inherit'>Pricing</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit' id='blog-menu' onClick={handleClick} aria-control={open ? "blog-menu" : undefined} aria-haspopup='true' aria-expanded={open ? "true" : undefined} endIcon={<KeyboardArrowDown />}>
              Blog
            </Button>
            <Button color='inherit'>Contact</Button>
          </Stack>
          <Menu id='blog-menu' anchorEl={anchorEl} open={open} MenuListProps={{ "aria-labelledby": "resources-button" }} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  )
}
