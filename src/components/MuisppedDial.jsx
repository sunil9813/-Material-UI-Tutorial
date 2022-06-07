import React from "react"
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import { CopyAll, Print, Share, Edit } from "@mui/icons-material"

export const MuisppedDial = () => {
  return (
    <>
      <SpeedDial ariaLabel='Navigation speed dial' sx={{ position: "absolute", bottom: 16, right: 16 }} icon={<SpeedDialIcon openIcon={<Edit />} />}>
        <SpeedDialAction icon={<CopyAll />} tooltipTitle='Copy'></SpeedDialAction>
        <SpeedDialAction icon={<Print />} tooltipTitle='Print'></SpeedDialAction>
        <SpeedDialAction icon={<Share />} tooltipTitle='Share'></SpeedDialAction>
      </SpeedDial>
    </>
  )
}
