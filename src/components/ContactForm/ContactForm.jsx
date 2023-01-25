import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { updateContactsList } = this.props;

    updateContactsList(name, number);

    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        name="createContactForm"
        onSubmit={this.onFormSubmit}
        className={css.form}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onInputChange}
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
            onChange={this.onInputChange}
            className={css.input}
          />
        </label>

        <button type="submit" className={css.inputButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  updateContactsList: PropTypes.func,
};
