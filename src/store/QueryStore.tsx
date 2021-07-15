import { makeObservable, observable, action } from 'mobx';

class Query {
  @observable query = '';

  @action setQuery = (query: string) => {
    this.query = query;
  }
  
  constructor() {
    makeObservable(this);
  }
}

const QueryStore = new Query();
export default QueryStore;