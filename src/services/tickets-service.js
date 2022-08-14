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

export const deleteById = async (id) => {
  await fetch(`${serverAddress}/tickets/${id}`, {
    method: 'DELETE',
  });
};

const TicketsService = { fetchAll, fetchById, deleteById };

export default TicketsService;
