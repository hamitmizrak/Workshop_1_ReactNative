import {createStore} from 'redux';

// Başlangıç durumu
const initialState = {
  count: 0,
};

////////////////////////////////////////////////////////////////
// Reducer Function
function counterReducer(state = initialState, action) {
  // ilgili key true ise çalıştır
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  } //end switch
} //end counterReducer

////////////////////////////////////////////////////////////////
// Store Oluşturmak
const StoreRedux = createStore(counterReducer);

// Export
export default StoreRedux;
