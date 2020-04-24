import React from 'react';
import '../css/UserCard.css';

export default function UserCard(props) {
  const {
    login,
    html_url,
    avatar_url,
    followers,
    following,
    public_repos,
    bio,
    created_at,
    name,
  } = props.user;

  return (
    <div className="user-card">
      <div className="left-container border-right">
        <div className="center">
          <h4>Followers:</h4>
          <p>{followers}</p>
        </div>
        <div className="center">
          <h4>Following:</h4>
          <p>{following}</p>
        </div>
        <div className="center">
          <h4>Repositories:</h4>
          <p>{public_repos}</p>
        </div>
        <a href={html_url}>GitHub Link</a>
      </div>
      <div className="middle-container border-right">
        <h2>{name}</h2>
        <h2>{login}</h2>
        {bio ? <p>{bio}</p> : ''}
        <p>Joined on: {created_at}</p>
      </div>
      <div className="right-container">
        <img src={avatar_url} alt="Repository owner Avatar" />
      </div>
    </div>
  );
}
