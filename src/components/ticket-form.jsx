import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField,
} from '@mui/material';
import React from 'react';

const TicketForm = ({
  open, onClose, onChange, handleClick, types, values,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Add New Ticket</DialogTitle>
    <DialogContent sx={{
      display: 'flex', flexDirection: 'column', gap: 2, width: 400,
    }}
    >
      <TextField
        name='typeId'
        label='Type'
        variant='standard'
        select
        onChange={onChange}
        value={values.typeId}
      >
        {
          types.map(({ id, title }) => (
            <MenuItem key={id} value={id}>
              {title}
            </MenuItem>
          ))
        }
      </TextField>
      <TextField
        name='from'
        label='From'
        variant='standard'
        type='text'
        onChange={onChange}
        value={values.from}
      />
      <TextField
        name='to'
        label='To'
        variant='standard'
        type='text'
        onChange={onChange}
        value={values.to}
      />
      <TextField
        name='price'
        label='Price'
        variant='standard'
        type='number'
        onChange={onChange}
        value={values.price}
      />
    </DialogContent>
    <DialogActions sx={{ px: 3, pt: 0, pb: 2 }}>
      <Button variant='contained' fullWidth onClick={() => handleClick(values)}>Add</Button>
    </DialogActions>
  </Dialog>
);

export default TicketForm;
