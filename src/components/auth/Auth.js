import React, {Component} from 'react';
import axios from 'axios';

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

  createUser = () => {
    axios.post('/api/register', this.state).then(instance => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
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
            <button onClick={() => this.createUser()}> Register </button>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
