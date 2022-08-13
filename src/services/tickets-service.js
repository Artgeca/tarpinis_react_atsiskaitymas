const serverAddress = 'http://localhost:8000';

export const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/tickets?_expand=type`);
  const tickets = await response.json();

  return tickets;
};

const TicketsService = { fetchAll };

export default TicketsService;