import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useFontContext } from '../context/FontContext';
import CommentBox from './CommentBox';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const topRef = useRef(null);
  const { fontSize } = useFontContext();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        if (!response.ok) {
          throw new Error('Post not found');
        }
        
        const postData = await response.json();
        setPost(postData);
        
        // Scroll to top when post is loaded
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getFontSizeStyle = () => {
    switch (fontSize) {
      case 'small': return '14px';
      case 'large': return '20px';
      default: return '16px';
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Loading post...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <h2>Error: {error}</h2>
        <p>Please check the post ID and try again.</p>
      </div>
    );
  }

  return (
    <div ref={topRef} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        move up ↑
      </button>

      <article style={{ fontSize: getFontSizeStyle(), lineHeight: '1.6' }}>
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ 
            color: '#333', 
            marginBottom: '10px',
            fontSize: fontSize === 'small' ? '24px' : fontSize === 'large' ? '36px' : '28px'
          }}>
            {post.title}
          </h1>
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            Post ID: {post.id} | User ID: {post.userId}
          </p>
        </header>

        <div style={{ marginBottom: '30px' }}>
          <p style={{ textAlign: 'justify' }}>{post.body}</p>
        </div>
      </article>

      <CommentBox />
    </div>
  );
};

export default Post;