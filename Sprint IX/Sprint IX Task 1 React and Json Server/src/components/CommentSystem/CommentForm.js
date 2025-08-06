import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    author: '',
    text: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.author.trim()) {
      newErrors.author = 'Name is required';
    }
    
    if (!formData.text.trim()) {
      newErrors.text = 'Comment text is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    
    try {
      const result = await onSubmit(formData);
      
      if (result.success) {
        setFormData({ author: '', text: '' });
        setErrors({});
      } else {
        setErrors({ submit: result.error });
      }
    } catch (err) {
      setErrors({ submit: 'An unexpected error occurred' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="comment-form-container">
      <h4>✍️ Add a Comment</h4>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-group">
          <label htmlFor="author">Your Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={errors.author ? 'error' : ''}
            placeholder="Enter your name"
          />
          {errors.author && <span className="error-text">{errors.author}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="text">Comment:</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className={errors.text ? 'error' : ''}
            placeholder="Write your comment here..."
            rows="4"
          />
          {errors.text && <span className="error-text">{errors.text}</span>}
        </div>

        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <button 
          type="submit" 
          disabled={submitting}
          className="btn btn-primary"
        >
          {submitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
