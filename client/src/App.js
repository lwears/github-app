import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  const [repositories, setRepositories] = useState(null);
  const [user, setUser] = useState(null);
  let display;

  const search = async (queryTerm, queryType) => {
    if (queryType === 'Repository') {
      try {
        const data = await axios.get(`/api/repos/${queryTerm}`);
        setUser(false);
        setRepositories(data.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
    if (queryType === 'User') {
      try {
        const data = await axios.get(`/api/users/${queryTerm}`);
        setRepositories(false);
        setUser(data.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  if (repositories) {
    display = <Board repos={repositories} />;
  } else if (user) {
    display = <Board user={user} />;
  } else {
    display = '';
  }

  return (
    <div>
      <Header search={search} />
      {display}
    </div>
  );
}

export default App;
