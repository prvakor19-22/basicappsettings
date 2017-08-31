import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';
import jquery from 'jquery';
import PropTypes from 'prop-types';
import { sayHello } from './modules.js';

class Greeter extends Component{
  render() {
    return (
      <div>
        <div className={styles.root}>
          {config.greetText}
          {this.props.message}
        </div>
      </div>  
    );
  }

  componentDidMount(){
    this.changeColor()
    console.log(sayHello('World')); /*ovo je samo da pokaze da li radi tree-shaking*/
  }

  changeColor(){
    jquery('#root').css("color", "yellow");
  }
}

Greeter.propTypes = {
  message: PropTypes.string
};

export default Greeter