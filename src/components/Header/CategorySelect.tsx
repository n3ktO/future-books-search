import { observer } from 'mobx-react-lite';

import CategoryStore from '../../store/CategoryStore';

const categoryOptions = [
  'all',
  'art',
  'biography',
  'computers',
  'history',
  'medical',
  'poetry'
];

const CategorySelect = observer(() => {
  const { setCategory } = CategoryStore;

  return (
    <select onChange={event => setCategory(event.currentTarget.value)}>
      {categoryOptions.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
  );
});

export default CategorySelect;