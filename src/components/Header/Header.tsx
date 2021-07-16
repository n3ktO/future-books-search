import { FormEvent } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import Selector from '../Selector';
import Button from '../Button';
import TextField from '../TextField';

import QueryStore from '../../store/QueryStore';
import BooksStore from '../../store/BooksStore';
import BookInfoStore from '../../store/BookInfoStore';
import CategoryStore from '../../store/CategoryStore';
import SortingStore from '../../store/SortingStore';

const HeaderStyle = styled.header`
width: 100%;
padding: 16px;
margin-bottom: 16px;
display: grid;
gap: 16px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
box-sizing: border-box;
`;

const SearchContainer = styled.div`
width: 100%;
display: grid;
gap: 8px;
grid-template-columns: 1fr 80px;
`;

const Options = styled.div`
width: 100%;
display: grid;
gap: 16px;
grid-template-columns: 1fr 1fr;
`;

const OptionsCollapse = styled.details`
cursor: pointer;
`;

const Header = observer(() => {
  const { query, setQuery } = QueryStore;
  const { searchBooks } = BooksStore;
  const { id, removeBook } = BookInfoStore;
  const { setCategory } = CategoryStore;
  const { setSorting } = SortingStore;

  async function searchQuery(event: FormEvent) {
    event.preventDefault();
    await searchBooks();
    if (id) {
      removeBook();
    }
  }

  return (
    <HeaderStyle>
      <SearchContainer>
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
      </SearchContainer>
      <OptionsCollapse>
        <summary>Options</summary>
        <Options>
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
        </Options>
      </OptionsCollapse>
    </HeaderStyle>
  );
});

export default Header;