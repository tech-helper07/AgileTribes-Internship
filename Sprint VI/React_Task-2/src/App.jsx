import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
// import Users from "./Pages/Users.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Users from "./Pages/Users.jsx";
import Error from "./Pages/Error.jsx";
// import Content from "./Pages/Content.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Profile from "./Pages/Profile.jsx";
import Settings from "./Pages/Settings.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Login from "./Pages/Login.jsx";
//  import Login from "./Pages/Login.jsx";

function App() {
  return (
    // <BrowserRouter>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Users" element={<Users />} /> */}
        <Route path="/Users/:id" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <h2>Protected Page</h2>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Error />} />
        {/* <Route path="/content" element={<Content />} /> */}
      </Routes>
    </>
    // </BrowserRouter>

    // <>
    // {/* <MyCounter/>
    // <Contactform/>
    // <Toggle/>
    // <Todo/>
    // <Model/>
    // <Dropbox/>
    // <SearchFilter/>
    // <TabbedNavigation/> */}
    // {/* <ImageCarousel/> */}
    // </>
  );
}

export default App;
