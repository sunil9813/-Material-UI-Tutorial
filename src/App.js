import "./App.css"
// to make custome material ui
import { createTheme, colors, ThemeProvider } from "@mui/material"

import MuiButton from "./components/Button"
import { MuiCard } from "./components/Card"
import { Grids } from "./components/Grid"
import MiuSelect from "./components/MiuSelect"
import { MiuTable } from "./components/MiuTable"
import { MuiAccordion } from "./components/MuiAccordion"
import { MuiAlert } from "./components/MuiAlert"
import { MuiAutocompelet } from "./components/MuiAutocompelet"
import { MuiAvatr } from "./components/MuiAvatr"
import { MuiBadge } from "./components/MuiBadge"
import { MuiBottomNav } from "./components/MuiBottomNav"
import { MuiBox } from "./components/MuiBox"
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs"
import { MuiCheckBox } from "./components/MuiCheckBox"
import { MuiChip } from "./components/MuiChip"
import { MuiDialog } from "./components/MuiDialog"
import { MuiDrawer } from "./components/MuiDrawer"
import { MuiImageList } from "./components/MuiImageList"
import { MuiLink } from "./components/MuiLink"
import { MuiList } from "./components/MuiList"
import { MuiLoadingButton } from "./components/MuiLoadingButton"
import { MuiNavbar } from "./components/MuiNavbar"
import { MuiProgress } from "./components/MuiProgress"
import MuiRadioButton from "./components/MuiRadioButton"
import { MuiRating } from "./components/MuiRating"
import { MuiSkeleton } from "./components/MuiSkeleton"
import { MuiSnackbar } from "./components/MuiSnackbar"
import { MuisppedDial } from "./components/MuisppedDial"
import { MuiStack } from "./components/MuiStack"
import { MuiSwitch } from "./components/MuiSwitch"
import MuiTextFiled from "./components/MuiTextFiled"
import { MuiToolTip } from "./components/MuiToolTip"
import { MuiTypography } from "./components/MuiTypography"
import { Papers } from "./components/Paper"

// add in last
import { LocalizationProvider } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { MuiPicker } from "./MuiPicker"
import { MuiDateRangerPicker } from "./components/MuiDateRangerPicker"
import { MuiTabs } from "./components/MuiTabs"
import { MuiTimeline } from "./components/MuiTimeline"
import { MuiMasonry } from "./components/MuiMasonry"
import MuiResponsive from "./components/MuiResponsive"
import { MuiCustomizingThem } from "./components/MuiCustomizingThem"

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[400],
    },
    netral: {
      main: colors.grey[500],
    },
  },
})
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className='app'>
            <MuiTypography />
            <MuiButton />
            <MuiTextFiled />
            <MiuSelect />
            <MuiRadioButton />
            <MuiCheckBox />
            <MuiSwitch />
            <MuiRating />
            <MuiAutocompelet />
            <MuiBox />
            <MuiStack />
            <Grids />
            <Papers />
            <MuiCard />
            <MuiAccordion />
            <MuiImageList />
            <MuiNavbar />
            <MuiLink />
            <MuiBreadcrumbs />
            {/* sidebar  */}
            <MuiDrawer />
            <MuisppedDial />
            <MuiBottomNav />
            <MuiAvatr />
            <MuiBadge />
            <MuiList />
            <MuiChip />
            <MuiToolTip />
            <MiuTable />
            <MuiAlert />
            <MuiSnackbar />
            <MuiDialog />
            <MuiProgress />
            {/*  lab components*/}
            <MuiSkeleton />
            <MuiLoadingButton />
            <MuiPicker />
            <MuiDateRangerPicker />
            <MuiTabs />
            <MuiTimeline />
            <MuiMasonry />
            <MuiResponsive />
            <MuiCustomizingThem />
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
