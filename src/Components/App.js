import React, { Component } from 'react';
import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'LeBron James',
        avatar:
          'https://specials-images.forbesimg.com/imageserve/5c76c3c731358e35dd277726/416x416.jpg?background=000000&cropX1=1199&cropX2=3230&cropY1=0&cropY2=2029',
        time: 'há 3 min',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'James Harden',
        avatar:
          'https://specials-images.forbesimg.com/imageserve/5b153a1031358e612fbb0afb/416x416.jpg?background=000000&cropX1=642&cropX2=2255&cropY1=29&cropY2=1641',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
