
export const initialState = {
    number: 0
}

// чистая функция

export const reducer = (state=initialState, action) => {
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


