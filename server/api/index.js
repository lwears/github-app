const express = require('express');
const router = express.Router();
const axios = require('axios');

// Helper Functions

const formatOwner = (owner) => {
  const { login, avatar_url, html_url } = owner;
  return { login, avatar_url, html_url };
};

const formatRepo = ({
  id,
  name,
  full_name,
  homepage,
  url,
  private,
  updated_at,
  created_at,
  language,
  owner,
  description,
  html_url,
}) => ({
  id,
  name,
  full_name,
  homepage,
  url,
  description,
  publicRepo: !private,
  updated_at: updated_at.split('T')[0],
  created_at: created_at.split('T')[0],
  language,
  owner: formatOwner(owner),
  html_url,
});

const formatUser = ({
  login,
  id,
  avatar_url,
  html_url,
  public_repos,
  followers,
  following,
  created_at,
  bio,
  name,
}) => ({
  login,
  id,
  avatar_url,
  html_url,
  public_repos,
  followers,
  following,
  created_at: created_at.split('T')[0],
  bio,
  name,
});

// API Routes

router.get('/repos/:searchQuery', async (req, res) => {
  try {
    const initialResult = await axios.get(
      `https://api.github.com/search/repositories?q=${req.params.searchQuery}`
    );
    const result = initialResult.data.items.map((repo) => formatRepo(repo));
    res.json(result);
  } catch (error) {
    res.status(404);
    res.json({ message: 'No Repos Found' });
  }
});

router.get('/users/:searchQuery', async (req, res) => {
  try {
    const initialResult = await axios.get(`https://api.github.com/users/${req.params.searchQuery}`);
    const result = formatUser(initialResult.data);
    res.json(result);
  } catch (error) {
    res.status(404);
    res.json({ message: 'No User Found!' });
  }
});

module.exports = router;
