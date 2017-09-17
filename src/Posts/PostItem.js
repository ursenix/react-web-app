import React, { Component } from 'react';

class PostItem extends Component {

  render() {
    return (
      <li>
        <strong>{this.props.post.title}</strong>
        <p>{this.props.post.body}</p>
      </li>
    );
  }
}

export default PostItem;
