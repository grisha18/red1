
import React from 'react';
import {connect} from "react-redux";
import {increaseNumber, decreaseNumber, increaseWithDelay, changeToBlack, changeToRed} from "./actions.js";

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.changeClick = this.changeClick.bind(this);
    }



    handleClick(){
        this.props.increaseNumber();
    }
    

    clickHandler(){

        this.props.decrease();
    }


    changeClick(){

        this.props.changeColor();
    }
    
    render(){

        

        return(
            <>  
                <label htmlFor="username">username</label>
                <input id="username" type="text" name="username"></input>
                <label htmlFor="password">password</label>
                <input id="password" type="text" name="password"></input>
                <button onClick={this.handleClick}>click me {this.props.number}</button>
                <button onClick={this.clickHandler}>decrement</button>
                <button onClick={this.changeClick}>changeColor</button>
                
                
            </>
            
        )
    }

}



// redux connect
//mapStateToProps

function mapStateToProps(state){
    return {
        number: state.numberReducer.number
    }
}

function mapDispatchToProps(dispatch){
    return {increaseNumber: ()=>dispatch(increaseNumber()), 
            decrease: ()=>dispatch(decreaseNumber()),
            changeColor: ()=> dispatch(changeToRed()) }
}

// export default connect(null, null)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;