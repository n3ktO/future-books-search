import { observer } from 'mobx-react-lite';

import BookCard from './BookCard';
import Button from '../../Button';

import BooksStore from '../../../store/BooksStore';

const LoadMoreButton = styled(Button)`
width: 100%;
margin: 16px 0;
`;
const BookList = observer(() => {
  const { books, total, loadNextBooks, isLoading } = BooksStore;

  return (
    <div>
      <div>{total}</div>
      <div>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      {books.length !== 0 && books.length < total && (
        <LoadMoreButton
          onClick={loadNextBooks}
          disabled={books.length === 0 || isLoading}
        >
          Загрузить еще
        </LoadMoreButton>
      )}
  );
});

export default BookList;