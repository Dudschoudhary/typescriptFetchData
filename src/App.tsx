import React, { useState, useEffect } from 'react';
import PostList from './postList/PostList';  // assuming PostList returns a Promise

function App() {
  const [PostListComponent, setPostListComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const component = await PostList();
      setPostListComponent(component);
    };

    loadComponent();
  }, []);

  return (
    <>
      <h2>Post Card</h2>
      {PostListComponent || <p>Loading PostList...</p>}
    </>
  );
}

export default App;
