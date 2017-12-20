// State не е състоянието на приложението. То е само състоянието, за което е отговорен дадения редюсър!!!
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
