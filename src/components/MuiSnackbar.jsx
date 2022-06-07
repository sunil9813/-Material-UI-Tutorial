import React, { useState, forwardRef } from "react"
import { Snackbar, Button, Alert } from "@mui/material"

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />
})

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/*<Snackbar
        message='form submitted successfully'
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />*/}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Form Submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}
