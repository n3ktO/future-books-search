import { observer } from 'mobx-react-lite';

import BookInfoStore from '../../../store/BookInfoStore';

const BookCard = observer(({ book }: any) => {
  const { setBook } = BookInfoStore;

  return (
    <div onClick={() => setBook(book.id)}>
      {book.volumeInfo.title}
    </div>
  );
});

export default BookCard;