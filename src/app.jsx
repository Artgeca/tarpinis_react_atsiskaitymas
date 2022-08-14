import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TicketsService from './services/tickets-service';
import TicketCard from './components/ticket_card';

const App = () => {
  const [tickets, setTickets] = useState([]);

  const fetchAllTickets = async () => {
    const ticketsData = await TicketsService.fetchAll();
    setTickets(ticketsData);
  };

  useEffect(() => {
    fetchAllTickets();
  }, []);

  console.log(tickets);

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      sx={{
        bgcolor: 'grey.200', width: '100%', minHeight: '100vh', m: 0,
      }}
    >
      <Typography variant='h4' p={1} gutterBottom>Tickets</Typography>
      <Box
        display='flex'
        justifyContent='center'
        gap={2}
        flexWrap='wrap'
      >
        {
        tickets.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))
        }
      </Box>
      <Button
        variant='contained'
        sx={{
          position: 'absolute', bottom: 40, right: 40, height: '64px', width: '64px', borderRadius: '50%',
        }}
      >
        <AddIcon />
      </Button>
    </Box>
  );
};

export default App;
