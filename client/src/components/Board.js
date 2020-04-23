import React, { useState } from 'react';
import Card from './Card';
import '../css/board.css';

export default function Board(props) {
  const [repos, setRepos] = useState(props.repos);

  return (
    <div className="repo-board">
      {repos ? repos.map((repo) => <Card repo={repo} key={repo.id} />) : ''}
    </div>
  );
}
