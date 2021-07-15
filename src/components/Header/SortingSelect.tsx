import { observer } from 'mobx-react-lite';

import SortingStore from '../../store/SortingStore';

const sortingOptions = [
  'relevance',
  'newest'
];

const SortingSelect = observer(() => {
  const { setSorting } = SortingStore;

  return (
    <select onChange={event => setSorting(event.currentTarget.value)}>
      {sortingOptions.map((sorting, index) => (
        <option key={index} value={sorting}>{sorting}</option>
      ))}
    </select>
  );
});

export default SortingSelect;