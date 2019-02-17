import React, {Component} from 'react';

class Auth extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        {this.props.location.pathname === '/' ? null : (
          <div>
            <input placeholder="username" />
            <input placeholder="password" />
            <button> Login </button>
            <button> Register </button>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
