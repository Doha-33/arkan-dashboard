import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Permissions from "./pages/Admin/Permissions";
import Roles from "./pages/Admin/Roles";
import Users from "./pages/Admin/Users";
import Profile from "./pages/User/Profile";
import Settings from "./pages/User/Settings";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/permissions" element={<Permissions/>} />
          <Route path="/roles" element={<Roles/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/settings" element={<Settings/>} />
          </Route>

          
          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />


        </Routes>
      </Router>
    </>
  );
}
