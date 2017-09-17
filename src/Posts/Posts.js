import React, { Component } from 'react';
import PostItem from './PostItem';

class Posts extends Component {


  render() {

    let posts;

    if(this.props.posts){
      posts = this.props.posts.map((post) => {
        return(
          <PostItem key={post.id} post={post} />
      );
      });
    }

    return (
      <div>
        <h2>Posts</h2>
        {posts}
      </div>
    );
  }
}

export default Posts ;
