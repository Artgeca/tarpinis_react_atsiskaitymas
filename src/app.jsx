import { useEffect, useState } from 'react';
import {
  Box, Fab, Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TicketsService from './services/tickets-service';
import TicketCard from './components/ticket-card';
import TicketForm from './components/ticket-form';

const defaultFormValues = {
  typeId: '',
  from: '',
  to: '',
  price: '',
};

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [ticketBeingEdited, setTicketBeingEdited] = useState(null);

  const fetchAllTickets = async () => {
    const ticketsData = await TicketsService.fetchAll();
    setTickets(ticketsData);
  };

  const fetchAllTicketTypes = async () => {
    const types = await TicketsService.fetchAllTicketTypes();
    setTicketTypes(types);
  };

  const deleteTicket = async (id) => {
    await TicketsService.deleteById(id);
    await fetchAllTickets();
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setFormValues(defaultFormValues);
    setOpenFormModal(false);
  };

  const addTicket = async (ticketProps) => {
    const ticket = await TicketsService.createTicket(ticketProps);
    await fetchAllTickets();
    closeModal();
    console.log(ticket);
  };

  useEffect(() => {
    fetchAllTickets();
    fetchAllTicketTypes();
  }, []);

  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{
        bgcolor: 'grey.200', width: '100%', minHeight: '100vh', m: 0,
      }}
    >
      <Box
        maxWidth={1400}
        display='flex'
        flexDirection='column'
        alignItems='center'
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
          <TicketCard key={ticket.id} {...ticket} onDelete={deleteTicket} />
        ))
        }
        </Box>
        <Fab
          color='primary'
          sx={{
            position: 'absolute', bottom: 40, right: 40,
          }}
          onClick={() => setOpenFormModal(true)}
        >
          <AddIcon />
        </Fab>
      </Box>
      <TicketForm
        open={openFormModal}
        onClose={() => setOpenFormModal(false)}
        onChange={handleChange}
        types={ticketTypes}
        values={formValues}
        handleClick={addTicket}
      />
    </Box>
  );
};

export default App;
