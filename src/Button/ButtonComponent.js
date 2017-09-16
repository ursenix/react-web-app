import React, {Component} from 'react';
import './ButtonStyles.css';

class Button extends Component{



  render(){

    var buttonText= "Button";


    if(this.props.text){
      buttonText= this.props.text;
    }


    return(
      <button className="test_button" style={{backgroundColor: this.props.color}}>{buttonText}</button>
    );
  }
}

export default Button;
