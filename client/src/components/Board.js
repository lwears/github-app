import React from 'react';
import RepoCard from './RepoCard';
import UserCard from './UserCard';
import '../css/board.css';

export default function Board({ repos, user }) {
  const display = repos ? (
    repos.map((repo) => <RepoCard repo={repo} key={repo.id} />)
  ) : user ? (
    <UserCard user={user} />
  ) : (
    ''
  );

  return <div className="repo-board">{display}</div>;
}
