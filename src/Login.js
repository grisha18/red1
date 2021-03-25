
import React, { useState } from 'react';
import {connect} from "react-redux";
import {increaseNumber, decreaseNumber, increaseWithDelay, changeToBlack, changeToRed,changeToColor} from "./actions.js";


import {makeColor} from "./util";



class Login extends React.Component{
    
    constructor(props){
        super(props);


        this.state = {color: "red", number: 2, page: 13};
        
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
        // DRY don't repeat yourself
        const hex = makeColor();
        this.props.changeToColor(hex);   /// dispatch(changeToColor(hex))

        
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
                <button onClick={this.changeClick} style={{color: this.props.color}}>changeColor</button>
                
                
            </>
            
        )
    }

}



// redux connect
//mapStateToProps

function mapStateToProps(state){
    return {
        number: state.numberReducer.number,
        color: state.colorReducer.color
    }
}

function mapDispatchToProps(dispatch){
    return {increaseNumber: ()=>dispatch(increaseNumber()), 
            decrease: ()=>dispatch(decreaseNumber()),
            changeColor: ()=>dispatch(changeToRed()),
            changeToColor: (color)=>dispatch(changeToColor(color))
         }
}

// export default connect(null, null)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
