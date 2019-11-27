import React, { Component } from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

export default class RegisterComponent extends Component {
  render() {
    return (
      <div className="register">
        <div>New user? Register Now! </div>
        <div><Link to='/home'>Skip and go to home </Link></div>
        <div><Link to='/login'>Back to login </Link></div>
      </div>
    )
  }
}
