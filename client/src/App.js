/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  const [repositories, setRepositories] = useState(null);
  const [user, setUser] = useState(null);

  const search = async (queryTerm, queryType) => {
    if (queryType === 'Repository') {
      const data = await axios.get(`/api/repos/${queryTerm}`);
      setUser(false);
      setRepositories(data.data);
    }
    if (queryType === 'User') {
      const data = await axios.get(`/api/users/${queryTerm}`);
      setRepositories(false);
      setUser(data.data);
    }
  };

  return (
    <div>
      <Header search={search} />
      {repositories ? <Board repos={repositories} /> : user ? <Board user={user} /> : ''}
    </div>
  );
}

export default App;
