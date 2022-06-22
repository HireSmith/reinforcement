import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function QuestionCard(props) : JSX.Element {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.company}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.question}
          </Typography>
          <Typography>
            {props.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
