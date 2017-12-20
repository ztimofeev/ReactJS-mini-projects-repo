import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}
// функцията mapStateToProps има специална роля - приема state и връща обект, всичко което се съдържа в него, ще бъде представено като this.props във класа-контейнер по-горе.
function mapStateToProps(state) {
  // всичко което се връща от тази функция ще бъде props вътре в BookList.
  return {
    books: state.books
  }
}

//Всичко което се връща от тази функция ще бъде props за контейнера BookList
function mapDispatchToProps(dispatch) {
  //Когато се извика функцията selectBook, резултатът ще бъде подаден до всички редюсери!!!!
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//функцията connect свързва react-компонент и redux, и приема функцията mapStateToProps и компонент - в случая BookList.
//Вторият аргумент -> mapDispatchToProps също връща props за BookList, който вече ще 'знае' за новия, изпратен му метод - selectBook.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
