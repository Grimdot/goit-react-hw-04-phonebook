import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';

const LS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const LSContacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (LSContacts) {
      return LSContacts;
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  const normalizedFilter = filter.toLowerCase().trim();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const updateContactsList = (newContactName, newContactNumber) => {
    isContactExists(newContactName)
      ? alert(`${newContactName} is already in contacts!`)
      : setContacts(prevState => {
          return [
            {
              id: nanoid(),
              name: newContactName,
              number: newContactNumber,
            },
            ...prevState,
          ];
        });
  };

  const filterInputChange = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return [...prevState.filter(contact => contact.id !== id)];
    });
  };

  const isContactExists = newName => {
    const normalizedNewName = newName.toLowerCase().trim();

    return contacts.some(
      ({ name }) => name.toLowerCase() === normalizedNewName
    );
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm updateContactsList={updateContactsList} />

      <h2>Contacts</h2>
      <Filter inputValue={filter} onInputChange={filterInputChange} />
      <ContactList contacts={visibleContacts} handleDeleteBtn={deleteContact} />
    </div>
  );
};

export default App;
