import { observer } from 'mobx-react-lite';

import QueryStore from '../../store/QueryStore';

const SearchButton = observer(() => {
  const { query } = QueryStore;

  return (
    <input
      type="submit"
      value="Поиск"
      disabled={!query}
    />
  );
});

export default SearchButton;