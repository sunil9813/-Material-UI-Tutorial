import React, { useState } from "react"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Favorite, Home, Person } from "@mui/icons-material"

export const MuiBottomNav = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <BottomNavigation sx={{ width: "100%", position: "absolute", bottom: "0" }} value={value} showLabels>
        <BottomNavigationAction label='Home' icon={<Home />} />
        <BottomNavigationAction label='Favorites' icon={<Favorite />} />
        <BottomNavigationAction label='Profile' icon={<Person />} />
      </BottomNavigation>
    </>
  )
}
