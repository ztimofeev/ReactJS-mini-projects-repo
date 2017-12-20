import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return (
        <div>
          <h3>Select a book to get started!</h3>
        </div>
      )
    }

    return (
      <div>
        <h1>Details for:</h1>
        <hr />
        <div><h3>Title: <strong>{this.props.book.title}</strong></h3></div>
        <div><h4>Pages: {this.props.book.pages}</h4></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);