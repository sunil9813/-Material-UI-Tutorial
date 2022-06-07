import React, { useState, useEffect } from "react"
import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material"

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <>
      <Stack spacing={1} width='250px'>
        <Skeleton animation='wave' />
        <Skeleton variant='text' animation='wave' />
        <Skeleton variant='circular' width={40} height={40} animation='wave' />
        <Skeleton variant='rectangular' width={240} height={125} animation='wave' />
      </Stack>

      <Box sx={{ width: "250px" }} mt={5}>
        {loading ? <Skeleton variant='rectangular' width={240} height={125} animation='wave' /> : <img src='https://images.pexels.com/photos/7760401/pexels-photo-7760401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Skeleton' width={256} height={144} />}
        <Stack direction='row' spacing={1} sx={{ width: "100%", marginTop: "12px" }}>
          {loading ? <Skeleton variant='rectangular' width={40} height={40} animation='wave' /> : <Avatar>V</Avatar>}
        </Stack>
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant='body1'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
              <Typography variant='body2'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='body1'>React Mui Cources</Typography>
            </>
          )}
        </Stack>
      </Box>
    </>
  )
}
