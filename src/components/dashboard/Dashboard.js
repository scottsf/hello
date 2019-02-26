import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Dashboard extends Component {
  state = {
    input: '',
    myPosts: true,
    posts: [
      {username: 'Potter', title: 'Secret spell', profilePicture: 'https:dfsf'},
    ],
  };

  componentDidMount() {
    this.getPosts();
  }

  toggleMyPost = () => {
    this.setState({myPosts: !this.state.myPosts});
  };

  getPosts = () => {
    axios
      .get(
        `/api/posts/${this.props.id}?userposts=${this.state.myPosts}&search=${
          this.state.input
        }`,
      )
      .then(res => {
        this.setState({posts: res.data});
      });
  };

  render() {
    console.log(this.props.id);
    const posts = this.state.posts.map(post => (
      <p key={post.id}>
        {post.username} {post.title} {post.profilePicture}
      </p>
    ));
    return (
      <div>
        <input onChange={e => this.setState({input: e.target.value})} />
        <button onClick={() => this.getPosts()}>Search</button>
        <button onClick={() => this.setState({input: ''})}>Reset</button>
        <input
          type="checkbox"
          label="My Posts"
          value={this.state.myPosts}
          onClick={() => this.toggleMyPost()}
        />
        {posts}
      </div>
    );
  }
}

const mapStateToProps = ({id}) => ({
  id,
});

export default connect(mapStateToProps)(Dashboard);
