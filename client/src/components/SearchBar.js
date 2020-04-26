import React from 'react';
import PropTypes from 'prop-types';
import '../css/SearchBar.css';

export default function SearchBar(props) {
  const query = React.createRef();
  const queryType = React.createRef();
  const { search } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    search(query.current.value, queryType.current.value);
    query.current.value = '';
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <select name='query-type' id='query-type' ref={queryType}>
        <option value='Repository'>Repository</option>
        <option value='User'>User</option>
      </select>
      <input type='text' id='search' ref={query} />
      <input type='submit' value='Search' />
    </form>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};
