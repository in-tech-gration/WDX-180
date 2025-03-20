import { useReducer } from "react";
console.clear();
// TODO: Implement a TODO app using useReducer
// reducer is a kind of an EventListener, listening
// to "action" events (that get dispatched/emitted)
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TAX = "ADD_TAX";
export function reducer( state, action ){
  // RULE: the return value of the reducer, becomes the next state
  // RULE: When the value is an Object (not a Primitive), you should ALWAYS return a NEW VALUE, eg. [...state], {...state}
  // You should NEVER do this: state.prop = "New Value";
  console.log("action dispatched!", state, action);
  // 1) Deal with the action: check the type and decide...
  if ( action.type === INCREMENT ){
    console.log("INC++")
    return state + 1;
  }
  if ( action.type === DECREMENT ){
    console.log("DEC--");
    return state - 1; 
  }
  if ( action.type === ADD_TAX ){
    return state * 1.5;
  }
  console.log("Sorry, cannot handle nuclear weapons. yet.")
  return state;
  // 2) ...how to update the state
}
// YOU SHOULD WRITE TESTS FOR YOUR REDUCER:
const expected = 10;
const result = reducer( 9, { type: INCREMENT });
console.assert( expected === result, "expected 10");
const expected2 = 9;
const result2 = reducer( 9, { type: "dgsdgsdfgsdfgdgdggd" });
console.assert( expected2 === result2, "expected 9");

const initalValue = 0;
export default function ReducerState(){
  // useReducer( REDUCER_FUNCTION, INITIAL_VALUE )
  const [ counter, dispatch ] = useReducer(reducer, initalValue);
  // counter => getter, dispatch => request to set(ter)
  function addTax(){
    dispatch({ type: ADD_TAX })
  }
  return (
    <main>
      <h1>Reducer State: { counter }</h1>
      <button onClick={()=>{
        // action is an object, with a property type
        // and a custom value: "INCREMENT", "ADD_PRODUCT", "LIKE", "turn to light mode", etc.
        const action = { type: INCREMENT }; 
        // action === request
        dispatch(action);
        // => reducer( null, action );
        dispatch({ type: "WHATEVER" });
        // => reducer( null, { type: "WHATEVER" } );

        // dispatch === communicating the request with the reducer
      }}>Increment</button>
      <button onClick={()=>{
        dispatch({ type: DECREMENT });
        // reducer( null, { type: "DECREMENT" })
      }}>Decrement</button>
      <button onClick={addTax}>Add Tax</button>
    </main>
  )
}