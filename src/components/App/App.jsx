import { Component } from 'react';

import { Container } from './App.styled';

import NewContactForm from '../Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactsList';

import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contaktsFromStorage = localStorage.getItem('contakts-key');
    const parthContaktsFromStorage = JSON.parse(contaktsFromStorage);

    if (parthContaktsFromStorage && parthContaktsFromStorage.length > 0) {
      this.setState({ contacts: parthContaktsFromStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contakts-key', JSON.stringify(this.state.contacts));
    }
  }

  addDateForm = contact => {
    const incontacts = this.state.contacts.find(
      item => item.name === contact.name
    );
    if (incontacts) {
      Notiflix.Report.warning(
        'Warning',
        `${contact.name} is alredy incontacts`,
        'Cancel',
        function cb() {
          // callback
        }
      );
      //alert(`${contact.name} is alredy incontacts`);
      return;
    }
    Notiflix.Report.success('Success', 'Contact added', 'Ok', function cb() {
      // callback
    });

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleVisiblyContacts = () => {
    const normalizeFilter = this.state.filter.trim().toLowerCase();
    const visiblyContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return visiblyContacts;
  };

  hendleDeleteContact = event => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== event.target.id),
    });
    Notiflix.Report.success('Success', 'Contact deleted', 'Ok', function cb() {
      // callback
    });
  };

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;

    const handleVisiblyContacts = this.handleVisiblyContacts;
    const handleChangeFilter = this.handleChangeFilter;
    const hendleDeleteContact = this.hendleDeleteContact;

    return (
      <Container>
        <h2>Phonebook</h2>
        <NewContactForm onSubmit={this.addDateForm} />

        <h2>Contacts</h2>
        {contacts.length ? (
          <>
            <Filter onChangeFilter={handleChangeFilter} value={filter} />
            <ContactList
              dates={handleVisiblyContacts()}
              onDeleteContact={hendleDeleteContact}
            />
          </>
        ) : (
          <p>You have no contacts</p>
        )}
      </Container>
    );
  }
}
