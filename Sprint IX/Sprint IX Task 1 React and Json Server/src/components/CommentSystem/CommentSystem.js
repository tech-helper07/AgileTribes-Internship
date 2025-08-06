import React, { useState, useEffect } from 'react';
import { commentsAPI } from '../../services/api';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSystem = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await commentsAPI.getByPostId(postId);
      setComments(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch comments');
      console.error('Error fetching comments:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async (commentData) => {
    try {
      const newComment = {
        ...commentData,
        postId: postId,
        date: new Date().toISOString().split('T')[0]
      };
      const response = await commentsAPI.create(newComment);
      setComments([...comments, response.data]);
      return { success: true };
    } catch (err) {
      console.error('Error adding comment:', err);
      return { success: false, error: 'Failed to add comment' };
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        await commentsAPI.delete(commentId);
        setComments(comments.filter(comment => comment.id !== commentId));
      } catch (err) {
        console.error('Error deleting comment:', err);
        setError('Failed to delete comment');
      }
    }
  };

  return (
    <div className="comment-system">
      <h3>💬 Comments ({comments.length})</h3>
      
      {error && <div className="error-message">{error}</div>}
      
      <CommentForm onSubmit={handleAddComment} />
      
      <CommentList
        comments={comments}
        loading={loading}
        onDelete={handleDeleteComment}
      />
    </div>
  );
};

export default CommentSystem;