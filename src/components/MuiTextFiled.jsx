import React, { useState } from "react"
import { Stack, TextField, InputAdornment } from "@mui/material"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"

const MuiTextFiled = () => {
  const [value, setValue] = useState("")
  return (
    <>
      <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
          <TextField label='name' variant='outlined' />
          <TextField label='name' variant='filled' />
          <TextField label='name' variant='standard' />
        </Stack>

        <Stack direction='row' spacing={2}>
          <TextField label='name secondary' size='small' color='secondary' />
        </Stack>

        <Stack direction='row' spacing={2}>
          <TextField label='form input' required />
          <TextField label='Password' type='password' helperText='Do not share your password with anyone' />

          <TextField label='Read only' InputProps={{ readOnly: true }} />
        </Stack>

        <Stack direction='row' spacing={2}>
          {/*<TextField label='Amount' InputProps={{startAdornment :
			 <InputAdornment position ="start">$<InputAdornment/>}} />*/}
          <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position='start'> $ </InputAdornment> }} />
          <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position='end'> kg </InputAdornment> }} />
        </Stack>

        <Stack direction='row' spacing={2}>
          <TextField
            label='Password'
            type='password'
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? "Required" : "Do not share your password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <RemoveRedEyeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </>
  )
}

export default MuiTextFiled
