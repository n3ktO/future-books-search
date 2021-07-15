import { makeObservable, observable, action } from 'mobx';

class BookInfo {
  @observable id: string;
  
  @action setBook = (id: string) => {
    this.id = id;
  }

  @action removeBook = () => {
    this.id = undefined;
  }

  constructor() {
    makeObservable(this);
  }
}

const BookInfoStore = new BookInfo();
export default BookInfoStore;