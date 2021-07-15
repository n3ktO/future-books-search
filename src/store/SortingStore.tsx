import { makeObservable, observable, action } from 'mobx';

class Sorting {
  @observable sorting = 'relevance';

  @action setSorting = (sorting: string) => {
    this.sorting = sorting;
  }

  constructor() {
    makeObservable(this);
  }
}

const SortingStore = new Sorting();
export default SortingStore;