import React from "react"
import { Stack } from "@mui/material"
import { Avatar, AvatarGroup } from "@mui/material"
export const MuiAvatr = () => {
  return (
    <>
      <Stack direction='row' spacing={1} m={5}>
        <Avatar sx={{ bgcolor: "primary.light" }}>SU</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>PK</Avatar>
      </Stack>
      <Stack direction='row' m={5}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>SU</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>PK</Avatar>
          <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane deo' />
          <Avatar src='https://randomuser.me/api/portraits/women/51.jpg' alt='Jane deo' />
        </AvatarGroup>
      </Stack>
      <Stack direction='row' spacing={1} m={5}>
        <Avatar variant='square' sx={{ bgcolor: "primary.light", width: 50, height: 50 }}>
          SU
        </Avatar>
        <Avatar variant='rounded' sx={{ bgcolor: "success.light", width: 50, height: 50 }}>
          PK
        </Avatar>
      </Stack>
    </>
  )
}
