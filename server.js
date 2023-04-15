const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/random-anime-quote', async (req, res) => {
  try {
    const response = await axios.get('https://animechan.vercel.app/api/random');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve anime quote data' });
  }
});

app.listen(port, () => {
  console.log(`BFF API listening at http://localhost:${port}`);
});
