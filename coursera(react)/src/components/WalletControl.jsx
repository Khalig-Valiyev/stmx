import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ride") {
    return { money: state.money + 40 };
  }
  if (action.type === "refill") {
    return { money: state.money - 100 };
  }
};

const WalletControl = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="wallet-control">
      <h1>Wallet Control</h1>
      <h3>{state.money}</h3>
      <button onClick={() => dispatch({ type: "ride" })}>A new customer</button>
      <button
        onClick={() => dispatch({ type: "refill" })}
        style={{ marginLeft: "10px" }}
      >
        Refill the tank!
      </button>
    </div>
  );
};

export default WalletControl;
