const serverAddress = 'http://localhost:8000';

export const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/tickets?_expand=type`);
  const tickets = await response.json();

  return tickets;
};

export const fetchById = async (id) => {
  const response = await fetch(`${serverAddress}/tickets/${id}?_expand=type`);
  const ticket = await response.json();

  return ticket;
};

export const createTicket = async (ticket) => {
  const response = await fetch(`${serverAddress}/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  });

  return response.json();
};

export const updateTicket = async (ticket, id) => {
  const response = await fetch(`${serverAddress}/tickets/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  });

  return response.json();
};

export const deleteById = async (id) => {
  await fetch(`${serverAddress}/tickets/${id}`, {
    method: 'DELETE',
  });
};

export const fetchAllTicketTypes = async () => {
  const response = await fetch(`${serverAddress}/types`);
  const types = await response.json();

  return types;
};

const TicketsService = {
  fetchAll, fetchById, createTicket, updateTicket, deleteById, fetchAllTicketTypes,
};

export default TicketsService;
