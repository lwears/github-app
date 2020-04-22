const express = require('express');
const router = express.Router();
const axios = require('axios');

const formatOwner = (owner) => {
  const { login, avatar_url, html_url } = owner;
  return { login, avatar_url, html_url };
};

const formatObject = (obj) => {
  const {
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
  } = obj;

  return {
    name,
    full_name,
    homepage,
    url,
    description,
    private,
    updated_at,
    created_at,
    language,
    owner: formatOwner(owner),
  };
};

router.get('/', async function (req, res, next) {
  try {
    const initialResult = await axios.get('https://api.github.com/search/repositories?q=tetris');
    const result = initialResult.data.items.map((repo) => formatObject(repo));
    res.json(result);
  } catch (error) {
    res.sendStatus(404);
    res.json({ message: error.message });
  }
});

module.exports = router;
