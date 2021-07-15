import { FormEvent } from 'react';
import { observer } from 'mobx-react-lite';

import SearchInput from './SearchInput';
import CategorySelect from './CategorySelect';
import SortingSelect from './SortingSelect';
import SearchButton from './SearchButton';

import BooksStore from '../../store/BooksStore';
import BookInfoStore from '../../store/BookInfoStore';

const Header = observer(() => {
  const { searchBooks } = BooksStore;
  const { id, removeBook } = BookInfoStore;

  async function search(event: FormEvent) {
    event.preventDefault();
    await searchBooks();
    if (id) {
      removeBook();
    }
  }

  return (
    <header>
      <form onSubmit={search}>
        <SearchInput />
        <CategorySelect />
        <SortingSelect />
        <SearchButton/>
      </form>
    </header>
  );
});

export default Header;