import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import BookInfoStore from '../../../store/BookInfoStore';

const BookInfo = observer(() => {
  const { id, removeBook } = BookInfoStore;

  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => response.json())
      .then(data => setBookInfo(data));
  }, []);

  return (
    <div>
      <button onClick={removeBook}>Закрыть</button>
      {bookInfo && bookInfo.volumeInfo.title}
    </div>
  );
});

export default BookInfo;