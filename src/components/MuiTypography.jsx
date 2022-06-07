import { Typography } from "@mui/material"
import React from "react"

export const MuiTypography = () => {
  return (
    <>
      {/* -----for Heading --- */}
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      {/* -----for Medium size text --- */}
      <Typography variant='subtitle1'>h6 Heading</Typography>
      <Typography variant='subtitle2'>h6 Heading</Typography>

      {/* -----for pagagraph text --- */}
      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nostrum repellendus? Consequuntur quae sed maxime natus vitae unde iusto temporibus eum dolorem dolorum. Iusto ea natus error eum laborum! Est.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga fugit hic necessitatibus vitae, est quas similique ea inventore consequatur voluptate debitis doloribus nesciunt at aut illo! Dolore, doloremque eligendi!</Typography>

      {/* -----    --- */}
      <Typography variant='h3' component='h1' gutterBottom>
        h3 Heading
      </Typography>
      <Typography variant='h3' component='h1'>
        h3 Heading
      </Typography>
    </>
  )
}
