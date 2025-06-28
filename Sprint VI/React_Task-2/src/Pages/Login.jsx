const Login = () => {
  // const style = {{}};
  return (
    <div className="page1">
      <form>
        <h1 style={{color:'dark-blue'}}>Login Page</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
