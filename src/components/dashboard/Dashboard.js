import React, {Component} from 'react';

class Dashboard extends Component {
  state = {
    input: '',
    myPosts: true,
    posts: [
      {username: 'Potter', title: 'Secret spell', profilePicture: 'https:dfsf'},
    ],
  };

  toggleMyPost = () => {
    this.setState({myPosts: !this.state.myPosts});
  };

  render() {
    const posts = this.state.posts.map(post => (
      <p key={post.id}>
        {post.username} {post.title} {post.profilePicture}
      </p>
    ));
    return (
      <div>
        <input onChange={e => this.setState({input: e.target.value})} />
        <button>Search</button>
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

export default Dashboard;
