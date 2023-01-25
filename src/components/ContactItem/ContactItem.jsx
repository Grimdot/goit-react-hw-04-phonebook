import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, handleDeleteBtn }) => {
  return (
    <li className={css.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          handleDeleteBtn(id);
        }}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  handleDeleteBtn: PropTypes.func,
};

export default ContactItem;
