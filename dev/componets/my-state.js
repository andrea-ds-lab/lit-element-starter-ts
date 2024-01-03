import {LitState, stateVar} from 'lit-element-state';

class MyState extends LitState {
  static get stateVars() {
    return {
      counter: 0,
    };
  }
}

export const myState = new MyState();
