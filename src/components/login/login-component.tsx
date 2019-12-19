import React, { Component } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

export default class LoginComponent extends Component {
  render() {
    return (
      <div className="login">
        <div> login Here!</div>
        <div><Link to='/register'>Register </Link></div>
        <div><Link to='/home/'>Skip Sign In </Link></div>
      </div>
    )
  }
}
