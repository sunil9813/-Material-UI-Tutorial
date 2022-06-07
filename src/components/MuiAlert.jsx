import React from "react"
import { Stack, Alert, AlertTitle, Button } from "@mui/material"
import { Check } from "@mui/icons-material"
export const MuiAlert = () => {
  return (
    <>
      <Stack spacing={2}>
        <Alert severity='error'>This is an error alert</Alert>
        <Alert severity='warning'>This is an waring alert</Alert>
        <Alert severity='info'>This is an waring alert</Alert>
        <Alert severity='success'>This is an waring success</Alert>

        <Alert variant='outlined' severity='error'>
          This is an error alert
        </Alert>
        <Alert variant='outlined' severity='warning'>
          This is an waring alert
        </Alert>
        <Alert variant='outlined' severity='info'>
          This is an waring alert
        </Alert>
        <Alert variant='outlined' severity='success'>
          This is an waring success
        </Alert>

        <Alert variant='filled' severity='error'>
          <AlertTitle>error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant='filled' severity='warning'>
          <AlertTitle>warning</AlertTitle>
          This is an waring alert
        </Alert>
        <Alert variant='filled' severity='info'>
          <AlertTitle>info</AlertTitle>
          This is an waring alert
        </Alert>
        <Alert
          variant='filled'
          severity='success'
          icon={<Check fontSize='inherit' />}
          onClose={() => alert("Close alert")}
          action={
            <Button color='inherit' size='small'>
              Undo
            </Button>
          }
        >
          <AlertTitle>success</AlertTitle>
          This is an waring success
        </Alert>
      </Stack>
    </>
  )
}
