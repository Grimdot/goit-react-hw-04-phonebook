import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const ContactForm = ({ updateContactsList }) => {
  const [contactData, setContactData] = useState({
    name: '',
    number: '',
  });

  const { name: inputName, number: inputNumber } = contactData;

  const onFormSubmit = e => {
    e.preventDefault();

    updateContactsList(inputName, inputNumber);

    formReset();
  };

  const onInputChange = ({ target }) => {
    const { value, name } = target;

    setContactData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const formReset = () => {
    setContactData({
      name: '',
      number: '',
    });
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
          value={inputName}
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
          value={inputNumber}
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
