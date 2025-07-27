// Generate beautiful gradient backgrounds for posts
export const getPostBackground = (postId) => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff8a80 0%, #ea7ccc 100%)',
    'linear-gradient(135deg, #667db6 0%, #0082c8 100%)',
    'linear-gradient(135deg, #f78ca0 0%, #f9748f 100%)',
    'linear-gradient(135deg, #96deda 0%, #50c9c3 100%)',
    'linear-gradient(135deg, #cd9cf2 0%, #f6d365 100%)',
    'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
  ];
  
  return gradients[postId % gradients.length];
};

// Generate category based on post ID
export const getPostCategory = (postId) => {
  const categories = [
    'Technology', 'Travel', 'Food', 'Lifestyle', 'Health',
    'Business', 'Science', 'Art', 'Music', 'Sports',
    'Fashion', 'Photography', 'Education', 'Entertainment', 'Nature'
  ];
  
  return categories[postId % categories.length];
};

// Generate reading time based on post body length
export const getReadingTime = (body) => {
  const wordsPerMinute = 200;
  const wordCount = body.split(' ').length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime < 1 ? 1 : readingTime;
};