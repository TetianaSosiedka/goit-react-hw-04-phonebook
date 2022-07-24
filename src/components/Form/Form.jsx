import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Filter.styled';

import Button from '@mui/material/Button';

const NewContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const idInputName = nanoid();
  const idInputNumber = nanoid();

  const handeInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = nanoid();
    onSubmit({ name, number, id });

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={idInputName}>
        <span>Name</span>
        <input
          id={idInputName}
          onChange={handeInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label htmlFor={idInputNumber}>
        <span>Number</span>
        <input
          id={idInputNumber}
          onChange={handeInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>

      <Button variant="contained" size="small" type="submit">
        {' '}
        Add contact
      </Button>
    </Form>
  );
};

export default NewContactForm;
