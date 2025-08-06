import React, { useState, useEffect } from 'react';
import { postsAPI } from '../../services/api';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import CommentSystem from '../CommentSystem/CommentSystem';

const BlogEditor = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await postsAPI.getAll();
      setPosts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch posts');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPost = async (postData) => {
    try {
      const newPost = {
        ...postData,
        date: new Date().toISOString().split('T')[0]
      };
      const response = await postsAPI.create(newPost);
      setPosts([response.data, ...posts]);
      return { success: true };
    } catch (err) {
      console.error('Error adding post:', err);
      return { success: false, error: 'Failed to add post' };
    }
  };

  const handleUpdatePost = async (id, postData) => {
    try {
      const response = await postsAPI.update(id, postData);
      setPosts(posts.map(post => post.id === id ? response.data : post));
      setEditingPost(null);
      return { success: true };
    } catch (err) {
      console.error('Error updating post:', err);
      return { success: false, error: 'Failed to update post' };
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await postsAPI.delete(id);
        setPosts(posts.filter(post => post.id !== id));
        if (selectedPost && selectedPost.id === id) {
          setSelectedPost(null);
        }
      } catch (err) {
        console.error('Error deleting post:', err);
        setError('Failed to delete post');
      }
    }
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setSelectedPost(null);
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setEditingPost(null);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-editor">
      <h2>📝 Blog Editor</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      {selectedPost ? (
        <div className="blog-post-view">
          <button onClick={handleBackToList} className="btn btn-back">
            ← Back to Posts
          </button>
          <article className="blog-post-detail">
            <h1>{selectedPost.title}</h1>
            <div className="post-meta">
              <span>By {selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>
            <div className="post-content">
              {selectedPost.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
          <CommentSystem postId={selectedPost.id} />
        </div>
      ) : (
        <div className="blog-management-layout">
          <div className="form-section">
            <BlogForm
              post={editingPost}
              onSubmit={editingPost ? handleUpdatePost : handleAddPost}
              onCancel={handleCancelEdit}
              isEditing={!!editingPost}
            />
          </div>
          
          <div className="list-section">
            <BlogList
              posts={posts}
              loading={loading}
              onEdit={handleEditPost}
              onDelete={handleDeletePost}
              onSelect={handleSelectPost}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;
