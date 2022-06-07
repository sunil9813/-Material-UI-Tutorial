import React from "react"
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material"
import { Bookmark, BookmarkBorder } from "@mui/icons-material"
//import { Bookmark, Bookmarkborder } from "@mui/icons-material"

export const MuiCheckBox = () => {
  return (
    <>
      <Box>
        <Box>
          <FormControlLabel label='I accept terms and condition' control={<Checkbox />}></FormControlLabel>
        </Box>

        <Box>
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </Box>

        <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
              <FormControlLabel label='HTML' value='html' control={<Checkbox />}></FormControlLabel>
              <FormControlLabel label='CSS' value='css' control={<Checkbox />}></FormControlLabel>
              <FormControlLabel label='Javascript' value='Javascript' control={<Checkbox />}></FormControlLabel>
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
