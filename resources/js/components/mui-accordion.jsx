import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Button from './mui-button';

export default function MuiAccordion({ 
  accordionTitle, 
  buttonTitleOne,
  buttonTitleTwo,
  content, 
  expanded=false, 
  hasButtons=false 
}) {
  return (
    <div>
      <Accordion defaultExpanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{accordionTitle} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {content}
        </AccordionDetails>
        {hasButtons && ( // = {hasButtons ? <AccordionActions /> : null}
        <AccordionActions>
          <Button title={buttonTitleOne} />
          <Button title={buttonTitleTwo} />
        </AccordionActions>
      )}
      </Accordion>
    </div>
  );
}