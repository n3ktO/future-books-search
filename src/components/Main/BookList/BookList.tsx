import { observer } from 'mobx-react-lite';

import BookCard from './BookCard';
import LoadMoreButton from './LoadMoreButton';

import BooksStore from '../../../store/BooksStore';

const BookList = observer(() => {
  const { books, total } = BooksStore;

  return (
    <div>
      <div>{total}</div>
      <div>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      <div>
        <LoadMoreButton />
      </div>
    </div>
  );
});

export default BookList;