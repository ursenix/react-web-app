import {createStore} from 'redux';

import React, { Component } from 'react';

class ReduxDemo extends Component {
  render() {

    const reducer = (state, action) => {
      if(action.type === "ATTACK"){
        return action.payload
      }
      if(action.type === "ATTACK1"){
        return action.payload
      }
      return state;
    }

    const store = createStore(reducer, "Peace");

    store.subscribe(()=>{
      console.log("Store is now", store.getState());
    })

    store.dispatch({
      type: "ATTACK",
      payload: "Superman"
    })

    store.dispatch({
      type: "ATTACK1",
      payload: "Greenman"
    })


    return (
      <div>
        ReduxDemo
      </div>
    );
  }
}

export default ReduxDemo;
