import { increment, decrement } from './Action';

const initialState = {
  counter: 0,
};

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case increment:
      return { ...state, counter: state.counter + action.payload.value };
    case decrement:
      return { ...state, counter: state.counter > 0 ? state.counter - action.payload.value : state.counter  };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
}
