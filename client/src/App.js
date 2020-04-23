import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Board from './components/Board';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const searchRepos = async (searchTerm) => {
    const data = await axios.get(`/api/${searchTerm}`);
    setSearchResults(data.data);
    console.log(searchResults);
  };

  const display = searchResults ? <Board repos={searchResults} /> : '';

  return (
    <div>
      <Header search={searchRepos} />
      {display}
    </div>
  );
}

export default App;
