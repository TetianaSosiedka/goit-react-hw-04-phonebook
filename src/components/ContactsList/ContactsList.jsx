import PropTypes from 'prop-types';

import { List } from './ContactsList.styled';

import ContactsItem from '../ContactsItem/ContactsItem';

const ContactList = ({ dates, onDeleteContact }) => {
  return (
    <List>
      {dates.map(item => (
        <ContactsItem
          key={item.id}
          contactDetales={item}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.prototype = {
  dates: PropTypes.array,
};

export default ContactList;
