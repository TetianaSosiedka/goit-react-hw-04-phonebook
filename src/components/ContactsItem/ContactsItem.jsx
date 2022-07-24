import PropTypes from 'prop-types';

import { Li } from './ContactsItem.styled';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsItem = ({ contactDetales, onDeleteContact }) => {
  return (
    <Li>
      <Avatar
        sx={{
          width: [25],
          height: [25],
        }}
        src="/broken-image.jpg"
      />
      {contactDetales.name}: {contactDetales.number}
      <Button
        variant="outlined"
        size="small"
        type="button"
        id={contactDetales.id}
        onClick={onDeleteContact}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </Li>
  );
};

ContactsItem.prototype = {
  contactDetales: PropTypes.object,
  onDeleteContact: PropTypes.func,
};

export default ContactsItem;
