import { Outlet, Link } from "react-router-dom";
export default () => (
  <>
    <div className="page">
      <h1>Dashboard Page</h1>
      
      <Outlet />


      <div className="card">
        <Link to="/dashboard/profile" style={{fontSize:'2rem'}}>Profile </Link>
        <Link to="/dashboard/settings" style={{ fontSize: "2rem", marginLeft: "2rem" }}>
          Settings{" "}
        </Link>
      </div>
      {/* <div className="card">
        
      </div> */}

      
    </div>
  </>
);
