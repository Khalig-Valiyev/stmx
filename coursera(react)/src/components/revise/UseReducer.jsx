import React, { useReducer } from 'react'


const reducer = (state,action) => {
 if(action.type==="INCREASE") return {total: state.total + 50}
 if(action.type==="DECREASE") return {total: state.total - 50}
}


const UseReducer = () => {
    const initialState = { total:100}

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
    <h3>{state.total}</h3>
    <button onClick={() => dispatch({type:'INCREASE'})}>+</button>
    <button onClick={() => dispatch({type:'DECREASE'})}>-</button>
    </div>
  )
}

export default UseReducer