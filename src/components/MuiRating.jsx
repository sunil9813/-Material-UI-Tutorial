import React, { useState } from "react"
import { Stack, Rating } from "@mui/material"
import { Favorite, FavoriteBorder, MoodBad } from "@mui/icons-material"

export const MuiRating = () => {
  const [value, setvalue] = useState(3)
  console.log(value)

  const [changeValue, setChangeValue] = useState(3)
  const handleChange = (e) => {
    const newValue = e.target.value
    setChangeValue(newValue)
  }
  return (
    <>
      <Stack spacing={2}>
        <Rating />

        <Rating precision={0.5} size='large' icon={<Favorite fontSize='inherit' />} emptyIcon={<FavoriteBorder fontSize='inherit' />} />

        <Rating value={value} icon={<Favorite fontSize='inherit' color='error' />} emptyIcon={<FavoriteBorder fontSize='inherit' />} readOnly />

        <Rating value={changeValue} onClick={handleChange} icon={<MoodBad color='info' />} emptyIcon={<MoodBad fontSize='inherit' />} highlightSelectedOnly />
      </Stack>
    </>
  )
}
