export function selectBook(book) {
  //selectBook е ActionCreator -> той трябва да върне действие, което да бъде обект, съдържащ пропърти - type!
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


