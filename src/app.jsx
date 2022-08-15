import { useEffect, useState } from 'react';
import {
  Box, Fab, Tooltip, Typography,
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
  const [ticketId, setTicketId] = useState(null);

  const formatValues = ({
    id, typeId, from, to, price,
  }) => ({
    id, typeId, from, to, price,
  });

  const closeModal = () => {
    setFormValues(defaultFormValues);
    setOpenFormModal(false);
    setTicketBeingEdited(null);
    setTicketId(null);
  };

  const fetchAllTickets = async () => {
    const ticketsData = await TicketsService.fetchAll();
    setTickets(ticketsData);
  };

  const fetchAllTicketTypes = async () => {
    const types = await TicketsService.fetchAllTicketTypes();
    setTicketTypes(types);
  };

  const editTicket = async (ticket, id) => {
    await TicketsService.updateTicket(ticket, id);
    await fetchAllTickets();
    closeModal();
  };

  const handleEditClick = (id) => {
    const ticket = tickets.find((t) => t.id === id);
    if (ticket) {
      setFormValues(ticket);
      setTicketBeingEdited(true);
      setTicketId(id);
      setOpenFormModal(true);
    }
  };

  const deleteTicket = async (id) => {
    await TicketsService.deleteById(id);
    await fetchAllTickets();
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addTicket = async (ticket) => {
    await TicketsService.createTicket(ticket);
    await fetchAllTickets();
    closeModal();
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
          <TicketCard
            key={ticket.id}
            {...ticket}
            onDelete={deleteTicket}
            onEdit={handleEditClick}
          />
        ))
        }
        </Box>
        <Tooltip title='Add'>
          <Fab
            color='primary'
            sx={{
              position: 'absolute', bottom: 40, right: 40,
            }}
            onClick={() => setOpenFormModal(true)}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <TicketForm
        open={openFormModal}
        onClose={closeModal}
        onChange={handleChange}
        types={ticketTypes}
        values={formValues}
        handleClick={ticketBeingEdited ? editTicket : addTicket}
        clickProps={ticketBeingEdited
          ? [formatValues(formValues), ticketId] : [formatValues(formValues)]}
        formTitle={ticketBeingEdited ? 'Edit Ticket' : 'Add Ticket'}
        buttonText={ticketBeingEdited ? 'Edit' : 'Add'}
      />
    </Box>
  );
};

export default App;
