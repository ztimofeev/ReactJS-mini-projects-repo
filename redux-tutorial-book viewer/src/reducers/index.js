import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_activ_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

// BooksReduser-ът е отговорен само за създаването на пропъртито books, т.е. за неговата стойност
//Важно: всеки ключ, който създава combineReducers е видим глобално!!!