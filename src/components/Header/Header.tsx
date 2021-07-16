import { FormEvent } from 'react';
import { observer } from 'mobx-react-lite';

import Button from '../Button';

import BooksStore from '../../store/BooksStore';
import BookInfoStore from '../../store/BookInfoStore';

const Header = observer(() => {
  const { query, setQuery } = QueryStore;
  const { searchBooks } = BooksStore;
  const { id, removeBook } = BookInfoStore;

  async function searchQuery(event: FormEvent) {
    event.preventDefault();
    await searchBooks();
    if (id) {
      removeBook();
    }
  }

  return (
        <Button onClick={searchQuery} disabled={!query}>Search</Button>
  );
});

export default Header;