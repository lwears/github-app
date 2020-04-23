import React from 'react';
import '../css/card.css';

export default function Card(props) {
  const { repo } = props;

  return (
    <div className="repo-card">
      <div className="owner-container border-right">
        <p>{repo.owner.login}</p>
        <img src={repo.owner.avatar_url} alt="Repository owner Avatar" />
        <a href={repo.owner.html_url}>Owner Link</a>
      </div>
      <div className="repo-container">
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <p>{repo.language}</p>
        <p>{repo.updated_at}</p>
      </div>
    </div>
  );
}
