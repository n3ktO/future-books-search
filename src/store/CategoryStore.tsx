import { makeObservable, observable, action } from 'mobx';

class Category {
  @observable category = 'all';

  @action setCategory = (category: string) => {
    this.category = category;
  }

  constructor() {
    makeObservable(this);
  }
}

const CategoryStore = new Category();
export default CategoryStore;