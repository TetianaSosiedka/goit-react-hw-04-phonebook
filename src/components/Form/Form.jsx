import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Filter.styled';

import Button from '@mui/material/Button';

class NewContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  idInputName = nanoid();
  idInputNumber = nanoid();

  handeInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      id: nanoid(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.idInputName}>
          <span>Name</span>
          <input
            id={this.idInputName}
            onChange={this.handeInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>
        <label htmlFor={this.idInputNumber}>
          <span>Number</span>
          <input
            id={this.idInputNumber}
            onChange={this.handeInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>

        <Button variant="contained" size="small" type="submit">
          {' '}
          Add contact
        </Button>
      </Form>
    );
  }
}

export default NewContactForm;
