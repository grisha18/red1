import React from 'react';
import {useRef} from "react";

import { useDispatch, useSelector } from "react-redux";

import {increaseNumber, decreaseNumber, increaseWithDelay, decreaseWithDelay} from "./actions";
import Test from './Test';
import Login from "./Login";
import "./App.css"

// action creators

function App() {


  const dispatch = useDispatch();
  const number = useSelector( (state)=>state.numberReducer.number );
  const color = useSelector( (state)=>state.colorReducer.color );

  const ref = useRef(null);

  // amg202s
  return (
    <>
    <Test name="vasya"/>
    <select ref={ref}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
    <span className={color==="red" ? "red" : "white"}>{number}</span>
    
    <button onClick={()=>{dispatch(decreaseNumber(parseInt("1")))}}>Decrease</button>
    <button onClick={()=>{dispatch(increaseNumber(parseInt(ref.current.value))); }}>Increase</button>
    <button onClick={()=>{dispatch(increaseWithDelay())}}>privet</button>
    <button onClick={()=>{dispatch(decreaseWithDelay())}}>poca</button>
    <Login/>
    </>

  );
}

export default App;
