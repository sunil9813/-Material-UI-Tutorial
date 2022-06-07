import React from "react"
import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"
export const MuiBreadcrumbs = () => {
  return (
    <>
      <Box m={2}>
        {/*<Breadcrumbs aria-labe='breadcrumb' separator='_'>*/}
        <Breadcrumbs aria-labe='breadcrumb' separator={<NavigateNext fontSize='small' />} maxItems={2} itemsAfterCollapse={2}>
          <Link underline='hover' href='#'>
            Home
          </Link>
          <Link underline='hover' href='#'>
            Catalog
          </Link>
          <Link underline='hover' href='#'>
            Accessories
          </Link>
          <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
      </Box>
    </>
  )
}
