import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

export const MuiAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fuga illum quam magni quos aliquam magnam necessitatibus ipsa eaque debitis tenetur ex nostrum aspernatur excepturi incidunt, quaerat soluta libero repudiandae?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fuga illum quam magni quos aliquam magnam necessitatibus ipsa eaque debitis tenetur ex nostrum aspernatur excepturi incidunt, quaerat soluta libero repudiandae?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMore />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fuga illum quam magni quos aliquam magnam necessitatibus ipsa eaque debitis tenetur ex nostrum aspernatur excepturi incidunt, quaerat soluta libero repudiandae?</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
