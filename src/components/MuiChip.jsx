import React, { useState } from "react"
import { Stack, Chip, Avatar } from "@mui/material"
import { Face } from "@mui/icons-material"

export const MuiChip = () => {
  const [chip, setchip] = useState(["Chip 1", "Chip 2", "Chip 3"])

  const handleDelete = (chipToDelete) => {
    setchip((chip) => chip.filter((chip) => chip !== chipToDelete))
  }
  return (
    <>
      <Stack direction='row' spacing={2}>
        <Chip label='Chip'></Chip>
        <Chip label='Chip' color='primary'></Chip>
        <Chip label='Chip' color='secondary' size='small'></Chip>
        <Chip label='Chip Outlined' color='secondary' size='small' variant='outlined'></Chip>
        <Chip label='Chip Outlined' color='secondary' variant='outlined' avatar={<Avatar>V</Avatar>}></Chip>
        <Chip label='Chip Outlined' color='secondary' variant='outlined' icon={<Face />}></Chip>

        <Chip label='Click Me' color='success' onClick={() => alert("clicked")}></Chip>
        <Chip label='Delete Me' color='error' onClick={() => alert("clicked")} onDelete={() => alert("Delete handle called")}></Chip>

        {chip.map((chip) => (
          <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ))}
      </Stack>
    </>
  )
}
