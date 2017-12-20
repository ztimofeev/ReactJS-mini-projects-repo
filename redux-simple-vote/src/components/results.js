import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
  }

  voteAngularInPercents() {
    if (this.store.getState().angular) {
      return this.store.getState().angular / (this.store.getState().react + this.store.getState().angular + this.store.getState().vuejs) * 100;
    } else {
      return 0;
    }
  }

  voteReactInPercents() {
    if (this.store.getState().react) {
      return this.store.getState().react / (this.store.getState().react + this.store.getState().angular + this.store.getState().vuejs) * 100;
    } else {
      return 0;
    }
  }

  voteVuejsInPercents() {
    if (this.store.getState().vuejs) {
      return this.store.getState().vuejs / (this.store.getState().react + this.store.getState().angular + this.store.getState().vuejs) * 100;
    } else {
      return 0;
    }
  }

  angularInPercentStyle() {
    return {
      width: this.voteAngularInPercents() + '%'
    }
  }

  reactInPercentStyle() {
    return {
      width: this.voteReactInPercents() + '%'
    }
  }

  vuejsInPercentStyle() {
    return {
      width: this.voteVuejsInPercents() + '%'
    }
  }

  render() {
    return (
      <div>
        <span className="label-danger">Angular: {this.voteAngularInPercents().toFixed(2)}%</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={this.angularInPercentStyle()}></div>
        </div>
        <span className="label-danger">React: {this.voteReactInPercents().toFixed(2)}%</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={this.reactInPercentStyle()}></div>
        </div>
        <span className="label-danger">VueJS: {this.voteVuejsInPercents().toFixed(2)}%</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={this.vuejsInPercentStyle()}></div>
        </div>
      </div>
    );
  }
}

export default Results;