import React from 'react';
import PropTypes from 'prop-types';
import '../css/UserCard.css';

export default function UserCard({ user }) {
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
  } = user;

  return (
    <div className='user-card'>
      <div className='container left border-right'>
        <p>
          <strong>Joined: </strong>
          {created_at}
        </p>
        <img className='user-image' src={avatar_url} alt='Repository owner Avatar' />
        <a href={html_url}>
          <button type='button' className='user-link'>
            GitHub Link
          </button>
        </a>
      </div>
      <div className='container right'>
        <div>
          <h1>{name}</h1>
          <h4>{login}</h4>
        </div>
        {bio ? <p>{bio}</p> : ''}
        <div className='stats'>
          <div className='stat'>
            <h4>Followers:</h4>
            <p>{followers}</p>
          </div>
          <div className='stat'>
            <h4>Following:</h4>
            <p>{following}</p>
          </div>
          <div className='stat'>
            <h4>Repositories:</h4>
            <p>{public_repos}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    bio: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
};
