import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChanged(term) {
    this.setState({
      term: term
    });
    this.props.onSearchTermChanged(term);
  }

  render() {
    return (
      <div className="search-bar">
        <span>Choose video by key word: </span>
        <input 
          
          value={this.state.term}
          type="text" 
          onChange={event => this.onInputChanged(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
