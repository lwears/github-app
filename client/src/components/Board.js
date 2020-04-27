import React from 'react';
import PropTypes from 'prop-types';
import RepoCard from './RepoCard';
import UserCard from './UserCard';
import '../css/Board.css';

export default function Board({ repos, user }) {
  let display;

  if (repos.length !== 0) {
    display = repos.map((repo) => <RepoCard repo={repo} key={repo.id} />);
  } else if (user.login) {
    display = <UserCard user={user} />;
  } else {
    display = '';
  }

  return <div className='board'>{display}</div>;
}

Board.defaultProps = {
  repos: [],
  user: {},
};

Board.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      full_name: PropTypes.string,
      homepage: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
      publicRepo: PropTypes.bool,
      updated_at: PropTypes.string,
      created_at: PropTypes.string,
      language: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
        html_url: PropTypes.string,
      }),
    })
  ),
  user: PropTypes.shape({
    login: PropTypes.string,
    id: PropTypes.number,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    created_at: PropTypes.string,
    bio: PropTypes.string,
    name: PropTypes.string,
  }),
};
