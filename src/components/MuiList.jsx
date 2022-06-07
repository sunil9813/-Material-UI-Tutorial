import React from "react"
import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material"
import { Mail } from "@mui/icons-material"

export const MuiList = () => {
  return (
    <>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary='List item 1'></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary='List item 2'></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary='List item 3'></ListItemText>
          </ListItem>
        </List>
      </Box>
    </>
  )
}
