import {useRef} from "react";

import { useDispatch, useSelector } from "react-redux";

import {increaseNumber, decreaseNumber, increaseWithDelay, decreaseWithDelay} from "./actions";
import Test from './Test';


// action creators

function App() {


  const dispatch = useDispatch();
  const number = useSelector( (state)=>state.number );

  const ref = useRef(null);

  // amg202s
  return (
    <>
    <Test/>
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
    <span>{number}</span>
    <button onClick={()=>{dispatch(decreaseNumber(parseInt(ref.current.value)))}}>Decrease</button>
    <button onClick={()=>{dispatch(increaseNumber(parseInt(ref.current.value))); }}>Increase</button>
    <button onClick={()=>{dispatch(increaseWithDelay())}}>privet</button>
    <button onClick={()=>{dispatch(decreaseWithDelay())}}>poca</button>
    </>

  );
}

export default App;
