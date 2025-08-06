# JSON Server CRUD Learning Application

A comprehensive React application that demonstrates full CRUD (Create, Read, Update, Delete) operations using JSON Server as a mock backend. This project covers all essential concepts for building modern web applications with REST API integration.

## 🚀 Features

### Task 1: User Management (Basic CRUD)
- ➕ Add new users with form validation
- ✏️ Edit existing user details
- 🗑️ Delete users with confirmation
- 📋 Display users in a responsive list
- ✅ Real-time form validation

### Task 2: Product Inventory (Search & Filter)
- 🔍 Real-time search by product name
- 🏷️ Filter products by category
- 📦 Responsive product grid layout
- 🎯 Combined search and filter functionality

### Task 3: Blog Editor (Full CRUD with Routing)
- 📝 Create, edit, and delete blog posts
- 👁️ View individual blog posts
- 📅 Automatic date tracking
- 📖 Rich text content support

### Task 4: Comment System (Nested Data)
- 💬 Add comments to blog posts
- 🔗 Link comments to specific posts
- 🗑️ Delete comments
- 📊 Comment count display

### Task 5: Paginated Users (Advanced Queries)
- 📄 Server-side pagination
- ◀️ ▶️ Navigation controls
- 📊 Page information display
- 🗑️ Delete with page refresh handling

## 🛠️ Technologies Used

- **Frontend**: React 18, Hooks (useState, useEffect)
- **HTTP Client**: Axios
- **Backend**: JSON Server (Mock REST API)
- **Styling**: Custom CSS with Flexbox/Grid
- **Form Handling**: Controlled components
- **Validation**: Custom validation utilities

## 📁 Project Structure

```
src/
├── components/
│   ├── UserManagement/          # Task 1 components
│   ├── ProductInventory/        # Task 2 components
│   ├── BlogEditor/             # Task 3 components
│   ├── CommentSystem/          # Task 4 components
│   ├── PaginatedUsers/         # Task 5 components
│   └── Navigation/             # App navigation
├── services/
│   └── api.js                  # API service layer
├── utils/
│   └── validation.js           # Form validation utilities
├── App.js                      # Main app component
└── App.css                     # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or create the project**
   ```bash
   npx create-react-app json-server-crud-app
   cd json-server-crud-app
   ```

2. **Install dependencies**
   ```bash
   npm install axios react-router-dom
   npm install -g json-server
   # or locally: npm install json-server --save-dev
   ```

3. **Set up the database**
   Create `db.json` in the root directory with the provided sample data.

4. **Replace the default files**
   Replace the contents of the generated files with the code provided in this project.

### Running the Application

#### Option 1: Run servers separately
```bash
# Terminal 1 - Start JSON Server
json-server --watch db.json --port 3001

# Terminal 2 - Start React app
npm start
```

#### Option 2: Run both servers together
```bash
# Install concurrently if not already installed
npm install concurrently --save-dev

# Run both servers
npm run dev
```

The application will be available at:
- **React App**: http://localhost:3000
- **JSON Server API**: http://localhost:3001

## 📚 Learning Objectives

### 1. HTTP Methods & REST API
- **GET**: Fetch data from server
- **POST**: Create new resources
- **PUT**: Update entire resources
- **DELETE**: Remove resources

### 2. React Hooks
- **useState**: Manage component state
- **useEffect**: Handle side effects and API calls

### 3. Form Handling
- Controlled components
- Form validation
- Error handling and display
- Submit handling

### 4. API Integration
- Axios configuration
- Error handling
- Loading states
- Response handling

### 5. Advanced Features
- Search and filtering
- Pagination
- Nested data relationships
- Real-time updates

## 🎯 API Endpoints

### Users
- `GET /users` - Get all users
- `GET /users?_page=1&_limit=3` - Paginated users
- `POST /users` - Create user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Products
- `GET /products` - Get all products
- `GET /products?q=search` - Search products
- `GET /products?category=Electronics` - Filter by category

### Posts
- `GET /posts` - Get all posts
- `POST /posts` - Create post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

### Comments
- `GET /comments` - Get all comments
- `GET /comments?postId=1` - Get comments for post
- `POST /comments` - Create comment
- `DELETE /comments/:id` - Delete comment

## 🔧 Key Code Patterns

### API Service Layer
```javascript
// services/api.js
export const usersAPI = {
  getAll: () => api.get('/users'),
  create: (user) => api.post('/users', user),
  update: (id, user) => api.put(`/users/${id}`, user),
  delete: (id) => api.delete(`/users/${id}`)
};
```

### Form Validation
```javascript
// utils/validation.js
export const validateUser = (user) => {
  const errors = {};
  if (!user.name?.trim()) errors.name = 'Name is required';
  if (!isValidEmail(user.email)) errors.email = 'Invalid email';
  return { isValid: Object.keys(errors).length === 0, errors };
};
```

### State Management Pattern
```javascript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const fetchData = async () => {
  try {
    setLoading(true);
    const response = await api.getData();
    setData(response.data);
  } catch (err) {
    setError('Failed to fetch data');
  } finally {
    setLoading(false);
  }
};
```

## 🎨 Styling Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Gradient backgrounds, shadows, animations
- **Interactive Elements**: Hover effects, loading states
- **Accessibility**: Focus indicators, semantic HTML
- **Clean Layout**: Card-based design, proper spacing

## 🧪 Testing the API

### Using Browser
- Navigate to `http://localhost:3001/users` to see all users
- Use `http://localhost:3001/products?category=Electronics` for filtering

### Using curl
```bash
# GET all users
curl http://localhost:3001/users

# POST new user
curl -X POST http://localhost:3001/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'

# DELETE user
curl -X DELETE http://localhost:3001/users/1
```

## 🚀 Next Steps & Extensions

1. **Authentication**: Add login/logout simulation
2. **Real-time Updates**: WebSocket integration
3. **Advanced Filtering**: Multiple criteria, date ranges
4. **Drag & Drop**: Reorder items
5. **File Upload**: Image handling
6. **Export/Import**: CSV/JSON data exchange
7. **Dark Mode**: Theme switching
8. **Progressive Web App**: Offline capabilities

## 📝 Common Issues & Solutions

### CORS Issues
If you encounter CORS errors, make sure JSON Server is running on port 3001 and React on port 3000.

### Port Conflicts
If port 3001 is in use:
```bash
json-server --watch db.json --port 3002
# Update API_BASE_URL in services/api.js
```

### Form Validation
All forms include comprehensive validation with real-time feedback and error display.

## 🤝 Contributing

This is a learning project. Feel free to:
- Add new features
- Improve the UI/UX
- Add more validation rules
- Implement additional CRUD operations
- Enhance error handling

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed for learning React and API integration concepts.

---

**Happy Learning! 🎉**