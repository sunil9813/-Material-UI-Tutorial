import React from "react"
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
export const MuiCard = () => {
  return (
    <>
      <Box width='300px'>
        <Card>
          <CardMedia component='img' height='140px' image='https://source.unsplash.com/random' alt='unsplash image'></CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              React Js
            </Typography>
            <Typography variant='body' color='text.secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod esse laudantium incidunt placeat, omnis veritatis quae necessitatibus.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}
