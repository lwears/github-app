import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import '../css/Header.css';

export default function Header(props) {
  const { search } = props;
  return (
    <header>
      <h1 className='page-header'>Repo & User Searcher</h1>
      <SearchBar search={search} />
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.func.isRequired,
};
