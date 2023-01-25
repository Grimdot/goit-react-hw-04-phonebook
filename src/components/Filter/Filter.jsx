import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ inputValue, onInputChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        value={inputValue}
        onChange={onInputChange}
        className={css.input}
      />
    </label>
  );
};

Filter.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Filter;
