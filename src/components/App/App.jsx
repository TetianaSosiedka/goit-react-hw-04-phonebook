import { useState, useEffect } from 'react';

import { Container } from './App.styled';

import NewContactForm from '../Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactsList';

import Notiflix from 'notiflix';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contakts-key')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contakts-key', JSON.stringify(contacts));
  }, [contacts]);

  const addDateForm = contact => {
    const incontacts = contacts.find(item => item.name === contact.name);
    if (incontacts) {
      Notiflix.Report.warning(
        'Warning',
        `${contact.name} is alredy incontacts`,
        'Cancel',
        function cb() {
          // callback
        }
      );
      return;
    }
    Notiflix.Report.success('Success', 'Contact added', 'Ok', function cb() {
      // callback
    });
    setContacts(prevState => {
      return [...prevState, contact];
    });
  };

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const handleVisiblyContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();
    const visiblyContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return visiblyContacts;
  };

  const hendleDeleteContact = event => {
    setContacts(contacts.filter(item => item.id !== event.target.id));

    Notiflix.Report.success('Success', 'Contact deleted', 'Ok', function cb() {
      // callback
    });
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <NewContactForm onSubmit={addDateForm} />

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
};
