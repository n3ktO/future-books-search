import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import BookCard from './BookCard';
import Button from '../../Button';

import BooksStore from '../../../store/BooksStore';

const BookListWrapperStyle = styled.div`
width: 100%;
padding: 0 16px;
box-sizing: border-box;
`;

const TotalCountStyle = styled.div`
width: 100%;
margin: 16px 0;
box-sizing: border-box;
font-weight: 500;
`;

const BookListStyle = styled.div`
width: 100%;
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
gap: 16px;
`;

const LoadMoreButton = styled(Button)`
width: 100%;
margin: 16px 0;
`;

const BookList = observer(() => {
  const { books, total, loadNextBooks, isLoading } = BooksStore;

  return (
    <BookListWrapperStyle>
      <TotalCountStyle>
        {isLoading ?
          'Loading...' :
          total === null ?
            'Enter the book you are looking for.' :
            books.length === 0 ?
              'No results found.' :
              `Found ${total} results`
        }
      </TotalCountStyle>
      <BookListStyle>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </BookListStyle>
      {books.length !== 0 && books.length < total && (
        <LoadMoreButton
          onClick={loadNextBooks}
          disabled={books.length === 0 || isLoading}
        >
          Загрузить еще
        </LoadMoreButton>
      )}
    </BookListWrapperStyle>
  );
});

export default BookList;