import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Nav = props => {
  console.log(props);
  return (
    <div>
      <img src={props.profilePicture} alt="profile_picture" />
      <p>{props.username}</p>
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

const mapStateToProps = state => ({
  username: state.username,
  profilePicture: state.profile_pic,
});

export default connect(
  mapStateToProps,
  null,
)(Nav);
