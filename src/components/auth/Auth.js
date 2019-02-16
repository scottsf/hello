import React, {Component} from 'react';

class Auth extends Component {
  render() {
    return (
      <div>
        <input placeholder="username" />
        <input placeholder="password" />
        <button> Login </button>
        <button> Register </button>
      </div>
    );
  }
}

export default Auth;
