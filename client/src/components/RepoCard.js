import React from 'react';
import PropTypes from 'prop-types';
import '../css/RepoCard.css';

export default function RepoCard({ repo }) {
  const {
    owner,
    name,
    description,
    language,
    created_at,
    updated_at,
    html_url,
    homepage,
    publicRepo,
  } = repo;

  return (
    <a className='no-style' href={html_url}>
      <div className='repo-card'>
        <div className='container left border-right'>
          <h2>{owner.login}</h2>
          <img className='user-image' src={owner.avatar_url} alt='Repository owner Avatar' />
          <a href={owner.html_url}>
            <button type='button' className='link-button'>
              User Github
            </button>
          </a>
        </div>
        <div className='container right'>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{language}</p>
          <p>
            <strong>Created: </strong>
            {created_at}
          </p>
          <p>
            <strong>Last Updated: </strong>
            {updated_at}
          </p>
          <p>
            Repo is
            {publicRepo ? ' public' : ' private'}
          </p>
          <div className='links'>
            <a href={html_url}>
              <button type='button' className='link-button'>
                Repo Link
              </button>
            </a>
            <a href={homepage}>
              <button type='button' className='link-button'>
                Live Link
              </button>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}

RepoCard.propTypes = {
  repo: PropTypes.shape({
    owner: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    html_url: PropTypes.string,
    homepage: PropTypes.string,
    publicRepo: PropTypes.bool,
  }).isRequired,
};
