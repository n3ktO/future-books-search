import { observer } from 'mobx-react-lite';

import QueryStore from '../../store/QueryStore';

const SearchInput = observer(() => {
  const { setQuery } = QueryStore;

  return (
    <input
      type="search"
      onChange={event => setQuery(event.currentTarget.value)}
    />
  );
});

export default SearchInput;