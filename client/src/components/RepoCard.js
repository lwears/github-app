import React from 'react';
import '../css/RepoCard.css';

export default function RepoCard(props) {
  const { owner, name, description, language, updated_at, html_url } = props.repo;

  return (
    <a className="no-style" href={html_url}>
      <div className="repo-card">
        <div className="owner-container border-right">
          <h2>{owner.login}</h2>
          <img src={owner.avatar_url} alt="Repository owner Avatar" />
          <a href={owner.html_url}>Owner Link</a>
        </div>
        <div className="repo-container">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{language}</p>
          <p>{updated_at}</p>
        </div>
      </div>
    </a>
  );
}
