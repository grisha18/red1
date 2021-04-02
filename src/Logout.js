import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { changeToColor, changeToColorWithDelay, changeToColorKnopka, changeNumber } from './actions';


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
        <button onClick={()=>{
          const Log = ()=>  dispatch(changeToColorKnopka(makeColor()))
            setTimeout( ()=>Log(), 2000 )
          }}>knopka</button>                    

    </>
)

}



function mapDispatchToProps(dispatch){
    return {changeNumber: ()=>dispatch(changeNumber()), }
}


export default Logout;