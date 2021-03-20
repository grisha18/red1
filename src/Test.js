import React, {useRef} from 'react';

const Test = ()=>{

    const input = useRef(null);
    const Ref = useRef(null);
    return(
    <>

        
        <input ref={input} type="text" placeholder="privet"></input>
        <button onClick={()=>{Ref.current.focus()}}>poca</button>
        <button onClick={()=>{console.log(input.current.value)
         setTimeout( () =>{
          button,  3000
        })}}>press me</button>

        
    </>
    )
}


export default Test;

