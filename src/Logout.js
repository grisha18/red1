import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { changeToColor, changeToColorWithDelay } from './actions';


import {makeColor} from "./util";


// что делает connect
// для чего mapStateToProps и mapDispatchToProps
// сделать кнопку, которая после задержки сначала меняет цвет на случайный, а потом увеличивает число


const Logout = () =>{
    const dispatch = useDispatch();
    const color = useSelector((state)=>state.colorReducer.color) 

return(
    <>
        <button onClick={()=>{dispatch(changeToColor(makeColor()))}}      style={{color}}>press me</button>
        <button onClick={()=>dispatch(changeToColorWithDelay(makeColor()))}>click me</button>
    </>
)

}



export default Logout;