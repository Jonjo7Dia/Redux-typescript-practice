import React from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./store";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const balance = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{balance}</h1>
      <button onClick={() => {depositMoney(1000)}}>Deposit</button>
      <button onClick={() => {withdrawMoney(100)}}>Withdraw</button>
      <button onClick={() => {bankrupt()}}>Bankrupt</button>
    </div>
  );
}

export default App;
