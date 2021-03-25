import { combineReducers } from "redux";
import {CHANGE_TO_BLACK, CHANGE_TO_RED} from "./type";

const initialState = {
    number: 5,
}


const initialColorState = {
    color: "black"
}



const colorReducer = (state=initialColorState, action) =>{

    switch(action.type){
        case CHANGE_TO_BLACK:{
            const newState = {...state};
            newState.color = "black";
            return newState;
        }
        case CHANGE_TO_RED:{
            const newState = {...state};
            newState.color = "red";
            return newState;
        }
        default:
            return state;
    }


}



//root reducer

// чистая функция
// нет сайд-эффектов
const reducer = (state=initialState, action) => {
    switch(action.type){
        case "INCREASE_NUMBER":{
            const newState = {...state};
            newState.number = newState.number + action.payload;
            return newState;
        }
        case "DECREASE_NUMBER": {
            const newState =  {...state};
            newState.number =  newState.number - action.payload;
            return newState;
        }

        

        default:{
            return state;
        }
    }

} 


export const rootReducer = combineReducers({numberReducer: reducer, colorReducer})