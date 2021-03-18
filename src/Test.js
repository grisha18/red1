import {useRef} from 'react';

const Test = ()=>{


    const Ref = useRef(null);
    return(
    <>

        
        <input ref={Ref} type="text" placeholder="privet"></input>
        <button onClick={()=>{Ref.current.focus()}}>poca</button>

        
    </>
    )
}


export default Test;

