import React from 'react';

const BlogList = ({ posts, loading, onEdit, onDelete, onSelect }) => {
  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <p>No blog posts found. Create your first post!</p>
      </div>
    );
  }

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="blog-list-container">
      <h3>📋 Blog Posts ({posts.length})</h3>
      
      <div className="blog-list">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-content" onClick={() => onSelect(post)}>
              <h4>{post.title}</h4>
              <div className="blog-meta">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <p className="blog-excerpt">
                {truncateContent(post.content)}
              </p>
            </div>
            
            <div className="blog-actions">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(post);
                }}
                className="btn btn-view"
                title="View post"
              >
                View Full Post
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(post);
                }}
                className="btn btn-edit"
                title="Edit post"
              >
                ✏️
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(post.id);
                }}
                className="btn btn-delete"
                title="Delete post"
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

export default BlogList;