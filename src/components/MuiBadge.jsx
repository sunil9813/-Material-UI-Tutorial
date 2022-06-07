import React from "react"
import { Stack, Badge } from "@mui/material"
import { Mail } from "@mui/icons-material"

export const MuiBadge = () => {
  return (
    <>
      <Stack spacing={5} direction='row'>
        <Badge badgeContent={5} color='primary'>
          <Mail />
        </Badge>
        <Badge badgeContent={0} color='secondary'>
          <Mail />
        </Badge>
        <Badge badgeContent={0} color='success' showZero>
          <Mail />
        </Badge>
        <Badge badgeContent={100} color='success' showZero max={999}>
          <Mail />
        </Badge>
        <Badge variant='dot' color='primary'>
          <Mail />
        </Badge>
        <Badge variant='dot' color='primary' invisible>
          <Mail />
        </Badge>
      </Stack>
    </>
  )
}
