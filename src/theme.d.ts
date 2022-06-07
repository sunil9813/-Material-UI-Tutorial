import { ThemeOptions } from "@mui/material/styles"
import React from "react"

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"]
    }
  }
  interface Palette {
    neutral?: PaletteColor
  }
  interface PaletteOptions {
    neutral?: PaletteOptions
  }
  interface SimplePaletteColorOptions {
    darker?: string
  }
  interface Palette {
    darker?: string
  }
}
