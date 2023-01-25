import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, handleDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            id={id}
            handleDeleteBtn={handleDeleteBtn}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  handleDeleteBtn: PropTypes.func,
};

export default ContactList;
