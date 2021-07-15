import { makeObservable, observable, action, runInAction } from 'mobx';

import QueryStore from './QueryStore';
import CategoryStore from './CategoryStore';
import SortingStore from './SortingStore';

const PAGE_SIZE = 30;

function getUrl(page: number) {
  const { query } = QueryStore;
  const { category } = CategoryStore;
  const { sorting } = SortingStore;
  
  const url = new URL('https://www.googleapis.com/books/v1/volumes');
  const queryString = `${query}${
    category !== 'all' ? `+subject:${category}` : ''
  }`;
  url.searchParams.set('q', queryString);
  url.searchParams.set('orderBy', sorting);
  url.searchParams.set('maxResults', PAGE_SIZE.toString());
  url.searchParams.set('startIndex', (page * PAGE_SIZE).toString());

  return url;
}

async function fetchBooks(page: number, abort: AbortController) {
  const response = await fetch(getUrl(page).toString(), {
    signal: abort.signal
  });
  const data = await response.json();
  abort = null;
  return data;
}

class Books {
  @observable isLoading = false;
  @observable total = false;
  @observable books: any[] = [];

  page = 0;
  abortController: AbortController = null;

  @action searchBooks = async () => {
    this.abortController?.abort();
    this.abortController = new AbortController();

    runInAction(() => {
      this.isLoading = true;
    });

    this.page = 0;
    const data = await fetchBooks(this.page, this.abortController);
    
    runInAction(() => {
      this.total = data.totalItems;
      this.books = data.items;

      this.isLoading = false;
    });
  }

  @action loadNextBooks = async () => {
    runInAction(() => {
      this.isLoading = true;
    });

    const data = await fetchBooks(++this.page, this.abortController);

    runInAction(() => {
      this.books = [...this.books, ...data.items];
  
      this.isLoading = false;
    });
  }

  constructor() {
    makeObservable(this);
  }
}

const BooksStore = new Books();
export default BooksStore;