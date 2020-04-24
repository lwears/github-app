import React from 'react';
import SearchBar from './SearchBar';
import '../css/header.css';

export default function Header(props) {
  const { search } = props;
  return (
    <header>
      <h1>Repo & User Searcher</h1>
      <SearchBar search={search} />
    </header>
  );
}
