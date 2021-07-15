import { observer } from 'mobx-react-lite';

import BooksStore from '../../../store/BooksStore';

const LoadMoreButton = observer(() => {
  const { books, loadNextBooks, isLoading } = BooksStore;

  return (
    <button
      onClick={loadNextBooks}
      disabled={books.length === 0 || isLoading}
    >
      Загрузить еще
    </button>
  );
});

export default LoadMoreButton;