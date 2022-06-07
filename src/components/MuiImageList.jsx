import React from "react"
import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material"
export const MuiImageList = () => {
  const data = [
    {
      img: "https://source.unsplash.com/random/4",
      title: "Breakfast",
    },
    {
      img: "https://source.unsplash.com/random/3",
      title: "Buger",
    },
    {
      img: "https://source.unsplash.com/random/2",
      title: "Camera",
    },
    {
      img: "https://source.unsplash.com/random/1",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/5",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/6",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/7",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/8",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/9",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/10",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/11",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/12",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/8",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/9",
      title: "Coffee",
    },
    {
      img: "https://source.unsplash.com/random/10",
      title: "Coffee",
    },
  ]
  return (
    <>
      <Stack spacing={4}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {data.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>

        <ImageList variant='woven' sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} gap={8}>
          {data.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
            </ImageListItem>
          ))}
        </ImageList>

        <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
          <ImageList variant='masonry' cols={3} gap={8}>
            {data.map((item) => (
              <ImageListItem key={item.img}>
                <img src={`${item.img}?w=24&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </>
  )
}
