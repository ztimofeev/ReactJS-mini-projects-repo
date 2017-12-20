import React, {  Component } from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from  '../../components/CounterControl/CounterControl';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
  state = {
    counter: 0
  }

  onClickHandler = ( action, value ) => {
    switch( action ) {
      case 'inc':
        this.setState( (prevState) => { return { count: prevState.counter + 1 } } );
        break;
      case 'dec':
        this.setState( (prevState) => { return { count: prevState.counter - 1 } } );
        break;
      case 'add':
        this.setState( (prevState) => { return { count: prevState.counter + value } } );
        break;
      case 'sub':
        this.setState( (prevState) => { return { count: prevState.counter - value } } );
        break;
    }
  } 

  render () {
    return (
      <div>
        <CounterOutput value={this.props.ctr}/>
        <CounterControl label="Icrement" clicked={ this.props.onIncrementCounter }/>
        <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter } />
        <CounterControl label="Increment 5" clicked={ this.props.onAddCounter } />
        <CounterControl label="Decrement 5" clicked={ this.props.onSubtractCounter } />
        <hr />
        <button className="btn-btn" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>

          {this.props.storedResults.map((res, index) => 
              <div className="list" key={res.id + index} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</div>
          )}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.globCtr.counter,
    storedResults: state.globRes.results
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
    onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, payload: result}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, payload: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);