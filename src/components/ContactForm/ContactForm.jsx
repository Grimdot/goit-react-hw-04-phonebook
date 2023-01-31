import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const ContactForm = ({ updateContactsList }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    updateContactsList(name, number);

    formReset();
  };

  const onInputChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setNumber(inputValue);
        break;
      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form name="createContactForm" onSubmit={onFormSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
          className={css.input}
        />
      </label>
      <br />
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
          className={css.input}
        />
      </label>

      <button type="submit" className={css.inputButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  updateContactsList: PropTypes.func,
};
