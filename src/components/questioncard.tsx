import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function QuestionCard({ company, question, type, answer }) : JSX.Element {
  console.log('questioncardhere')
  return (
    <div>
      <Accordion style={{backgroundColor: 'lightgray', margin: '10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Company: {company} | Type: {type}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Question: {question}
          </Typography>
          <Typography>
            Answer: {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
