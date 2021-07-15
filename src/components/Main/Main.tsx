import { observer } from 'mobx-react-lite';

import BookList from './BookList/BookList';
import BookInfo from './BookInfo/BookInfo';

import BookInfoStore from '../../store/BookInfoStore';

const Main = observer(() => {
  const { id } = BookInfoStore;

  return (
    <main>
      {!id && <BookList />}
      {id && <BookInfo />}
    </main>
  );
});

export default Main;