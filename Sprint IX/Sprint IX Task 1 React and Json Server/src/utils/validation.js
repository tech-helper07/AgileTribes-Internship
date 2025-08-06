export const validation = {
  isRequired: (value) => value && value.toString().trim().length > 0,
  
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  isValidAge: (age) => {
    const numAge = parseInt(age);
    return numAge > 0 && numAge < 150;
  },
  
  minLength: (value, length) => value && value.length >= length,
  
  validateUser: (user) => {
    const errors = {};
    
    if (!validation.isRequired(user.name)) {
      errors.name = 'Name is required';
    }
    
    if (!validation.isRequired(user.email)) {
      errors.email = 'Email is required';
    } else if (!validation.isValidEmail(user.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!validation.isRequired(user.age)) {
      errors.age = 'Age is required';
    } else if (!validation.isValidAge(user.age)) {
      errors.age = 'Please enter a valid age (1-149)';
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};