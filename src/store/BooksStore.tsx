import { makeObservable, observable, action, runInAction } from 'mobx';

import QueryStore from './QueryStore';
import CategoryStore from './CategoryStore';
import SortingStore from './SortingStore';

const PAGE_SIZE = 30;

class Books {
  @observable isLoading = false;
  @observable total: number = null;
  @observable books: any[] = [];

  page = 0;
  abortController: AbortController = null;

  lastQuery: { query: string, category: string, sorting: string } = null;

  @action searchBooks = async () => {
    this.abortController?.abort();
    this.abortController = new AbortController();

    runInAction(() => {
      this.isLoading = true;
    });

    const { query } = QueryStore;
    const { category } = CategoryStore;
    const { sorting } = SortingStore;

    this.page = 0;

    const url = `https://www.googleapis.com/books/v1/volumes` +
      `?q=${query}${category !== 'all' ? `+subject:${category}` : ''}` +
      `&orderBy=${sorting}` +
      `&maxResults=${PAGE_SIZE}` + 
      `&startIndex=${this.page * PAGE_SIZE}`;

    try {
      const response = await fetch(url, {
        signal: this.abortController.signal
      });
      const data = await response.json();
    
      runInAction(() => {
        this.total = data.totalItems;
        this.books = data.items ?? [];
      });

      this.lastQuery = { query, category, sorting };
    } catch (e) {
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });

      this.abortController = null;
    }
  }

  @action loadNextBooks = async () => {
    this.abortController = new AbortController();

    runInAction(() => {
      this.isLoading = true;
    });

    this.page++;

    const url = `https://www.googleapis.com/books/v1/volumes` +
      `?q=${this.lastQuery.query}${
        this.lastQuery.category !== 'all' ?
          `+subject:${this.lastQuery.category}` :
          ''
      }` +
      `&orderBy=${this.lastQuery.sorting}` +
      `&maxResults=${PAGE_SIZE}` +
      `&startIndex=${this.page * PAGE_SIZE}`;

    try {
      const response = await fetch(url, {
        signal: this.abortController.signal
      });
      const data = await response.json();

      runInAction(() => {
        this.books = [...this.books, ...data.items];
      });
    } catch (e) {
      this.page--;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });

      this.abortController = null;
    }
  }

  constructor() {
    makeObservable(this);
  }
}

const BooksStore = new Books();
export default BooksStore;