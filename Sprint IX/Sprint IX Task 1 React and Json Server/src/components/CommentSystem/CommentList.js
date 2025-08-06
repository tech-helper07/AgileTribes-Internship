import React from 'react';

const CommentList = ({ comments, loading, onDelete }) => {
  if (loading) {
    return <div className="loading">Loading comments...</div>;
  }

  if (comments.length === 0) {
    return (
      <div className="empty-state">
        <p>No comments yet. Be the first to comment!</p>
      </div>
    );
  }

  return (
    <div className="comment-list-container">
      <div className="comment-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment-card">
            <div className="comment-header">
              <strong>{comment.author}</strong>
              <span className="comment-date">{comment.date}</span>
            </div>
            <div className="comment-text">
              {comment.text}
            </div>
            <div className="comment-actions">
              <button 
                onClick={() => onDelete(comment.id)}
                className="btn btn-delete btn-small"
                title="Delete comment"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;