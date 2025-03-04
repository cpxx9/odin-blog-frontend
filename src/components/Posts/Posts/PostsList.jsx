import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledPostsList from './StyledPostsList';
import Post from '../Post/Post';
import axios from '../../../api/axios';

const PostsList = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getPosts = async () => {
      try {
        const res = await axios.get('/posts?published', {
          signal: controller.signal,
        });
        isMounted && setPosts(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <StyledPostsList>
      {posts?.length ? (
        <ul>
          {posts.map((post) => (
            <li key={uuidv4()}>
              <Post postInfo={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts to display</p>
      )}
    </StyledPostsList>
  );
};

export default PostsList;
