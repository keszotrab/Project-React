import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import { AddPost } from './AddPost';
import { Comments } from './Comments';
import '../../styles/posts.css';


interface Comment{
id:number;
name: string;
body: string;

}

interface Post {
  id: number
  title: string
  body: string
  comments: Comment[];
  fetchPosts: any;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Error while fetching posts');
      }

      const data = await response.json();
      setPosts(data.slice(startIndex, endIndex));
    } catch (error) {
      console.error(error);
    }
  };

  const onAddPost = async (title: string, body: string) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, data]);
      // Reset selected post when adding a new post
      setSelectedPost(null);
    } catch (error) {
      console.error(error);
    }
  };

  const onDeletePost = async (id: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPosts((prevPosts: any) => prevPosts.filter((post: any) => post.id !== id));
      // Reset selected post when deleting a post
      setSelectedPost(null);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComments = async (postId: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!response.ok) {
        throw new Error('Error while fetching comments');
      }

      const data = await response.json();
      setSelectedPost((prevSelectedPost: any) => ({ ...prevSelectedPost, comments: data }));
    } catch (error) {
      console.error(error);
    }
  };

  const onEditPost = async (id: number, title: string, body: string) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          body: body,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to edit post');
      }

      const data = await response.json();
      setPosts((prevPosts: any) =>
        prevPosts.map((post: any) =>
          post.id === id ? { ...post, title: data.title, body: data.body } : post
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  if (posts != null) {


    return (
      <div className="post-list-container">
        <div className="posts-container">
          <h1 className='hpost'>📜Posts</h1>
          <AddPost onAddPost={onAddPost} />
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onSelectPost={(selectedPost) => setSelectedPost(selectedPost)}
              onDeletePost={onDeletePost}
              fetchPosts={fetchPosts}
              fetchComments={fetchComments}
              onEditPost={onEditPost}
            />
          ))}
          <div className="pagination">
            {[...Array(Math.ceil(100 / postsPerPage)).keys()].map((number) => (
              <span key={number + 1} onClick={() => paginate(number + 1)}>
                {number + 1}
              </span>
            ))}
          </div>
        </div>
        {selectedPost ? (
          <div>
            <h2 className='hpost'>Here are Comments for Post {selectedPost.id}</h2>
            {selectedPost.comments && selectedPost.comments.length > 0 ? (
              <ul>
                {selectedPost.comments.map((comment) => (
                  <li key={comment.id}>
                    <strong>{comment.name}:</strong> {comment.body}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments available</p>
            )}
          </div>
        ) : null}
      </div>
    );
  } else { return (<>Chicken on a raft on the monday morning o what a terrible sight to see, but it's loading now!</>) }
};

export default PostList;