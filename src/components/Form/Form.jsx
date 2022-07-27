import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { Form } from './Filter.styled';

import useGetContact from '../../hooks/useGetContact';

import Button from '@mui/material/Button';
//-----------------------------------------------------

const NewContactForm = ({ onSubmit }) => {
  const { name, number, setState } = useGetContact();

  const idInputName = nanoid();
  const idInputNumber = nanoid();

  const handeInputChange = event => {
    setState(event.target.name, event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = nanoid();
    onSubmit({ name, number, id });

    setState();
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

NewContactForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewContactForm;
