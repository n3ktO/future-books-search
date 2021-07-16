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
        <TextField
          onChange={(event: any) => setQuery(event.currentTarget.value)}
          placeholder="Type search query..."
          onKeyPress={(event: any) => {
            if (event.key === 'Enter') {
              searchQuery(event);
            }
          }}
        />
        <Button onClick={searchQuery} disabled={!query}>Search</Button>
          <Selector
            label="Categories"
            options={[
              'all',
              'art',
              'biography',
              'computers',
              'history',
              'medical',
              'poetry'
            ]}
            setOption={setCategory}
          />
          <Selector
            label="Sorting by"
            options={['relevance', 'newest']}
            setOption={setSorting}
          />
  );
});

export default Header;