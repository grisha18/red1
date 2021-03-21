import React, {useRef} from 'react';

const Test = (props)=>{

    const input = useRef(null);
    const Ref = useRef(null);
    const {name} = props;
    const poca = useRef(null);
    return(
    <>

        
        <input ref={input} type="text" placeholder="privet"></input>
        <button ref={poca} onClick={()=>{Ref.current.focus()}}>poca</button>
        <button onClick={()=>{
            const logInput = ()=>console.log(input.current.value)
            setTimeout( ()=>logInput(), 3000 )

            poca.current.disabled = true

        }}>{name}</button>

            
    </>
    )
}


export default Test;

