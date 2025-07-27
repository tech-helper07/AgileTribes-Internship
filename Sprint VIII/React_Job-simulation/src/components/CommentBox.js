import React, { useRef } from 'react';
import { useFontContext } from '../context/FontContext';

const CommentBox = () => {
  const commentRef = useRef(null);
  const { fontSize } = useFontContext();

  const focusCommentBox = () => {
    commentRef.current.focus();
  };

  const getFontSizeStyle = () => {
    switch (fontSize) {
      case 'small': return '12px';
      case 'large': return '18px';
      default: return '14px';
    }
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd' }}>
      <h3>Leave a Comment</h3>
      <textarea
        ref={commentRef}
        placeholder="Write your comment here..."
        style={{
          width: '100%',
          height: '100px',
          padding: '10px',
          fontSize: getFontSizeStyle(),
          fontFamily: 'Arial, sans-serif',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '10px'
        }}
      />
      <button
        onClick={focusCommentBox}
        style={{
          padding: '8px 16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Focus Comment Box
      </button>
    </div>
  );
};

export default CommentBox;