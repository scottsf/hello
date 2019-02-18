import React, {Component} from 'react';

class Auth extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        {this.props.location.pathname === '/' ? null : (
          <div>
            <input
              name="username"
              value={this.state.username}
              placeholder="username"
              onChange={e => this.handleInput(e)}
            />
            <input
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={e => this.handleInput(e)}
            />
            <button> Login </button>
            <button> Register </button>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
