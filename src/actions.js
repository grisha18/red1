
// если redux - возвращает объект
// при thunk -  возвращает функцию
export const increaseNumber = (number=1)=>{
    return {
        type: "INCREASE_NUMBER",
        payload: number
    }
};


export const decreaseNumber = (number=1) => {
    return {
        type: "DECREASE_NUMBER",
        payload: number
    }
};

export const increaseWithDelay = ()=>{
    return function(dispatch){
        setTimeout( ()=>dispatch(increaseNumber(1)), 3000 );
    }
}
export const decreaseWithDelay = () => {
    return(
        function(dispatch){
            setTimeout(() => {
                dispatch(decreaseNumber(1))                
            }, 5000);
        }

    )
}
