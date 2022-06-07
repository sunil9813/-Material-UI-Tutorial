import React, { useState } from "react"
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"

export const MuiDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-desc'>
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent id='dialog-desc'>
          <DialogContentText>Are you sure you want to test? You will not be able to edit after submitting</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancle</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
