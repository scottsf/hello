import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props => {
  return (
    <div>
      <Link to="/dashboard">
        <button> Home </button>
      </Link>
      <Link to={`/form/${2}`}>
        <button> Add new post </button>
      </Link>
      <Link to="/auth">
        <button> Logout </button>
      </Link>
    </div>
  );
};

export default Nav;
