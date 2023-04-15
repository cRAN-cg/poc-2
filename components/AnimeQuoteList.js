import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function AnimeQuoteList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('/random-anime-quote');
        setQuotes([response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuotes();
  }, []);

  return (
    <List>
      {quotes.map((quote) => (
        <ListItem key={quote.id}>
          <ListItemText primary={quote.quote} secondary={`${quote.character} (${quote.anime})`} />
        </ListItem>
      ))}
    </List>
  );
}
