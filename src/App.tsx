// @ts-ignore

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

// ✅ User Pages
import UsersPage from "./pages/User/UsersPage";
import UserFormPage from "./pages/User/UserForm";
import UserViewPage from "./pages/User/UserViewPage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import BlogsFormPage from "./pages/Blogs/BlogsFormPage";
import BlogsViewPage from "./pages/Blogs/BlogsViewPage";
import Home from "./pages/Dashboard/Home";

 const NotFoundPage = () => (
  <div className="flex items-center justify-center h-screen text-gray-600 text-xl">
    404 | Page Not Found
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        
        <Route element={<AppLayout />}>
        
        <Route path="/" element={< Home/>} />
          {/* ---------- Users Routes ---------- */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/create" element={<UserFormPage mode="create" />} />
          <Route path="/users/edit/:id" element={<UserFormPage mode="edit" />} />
          <Route path="/users/view/:id" element={<UserViewPage mode="view" />} />
          {/* ---------- End blogs ---------- */}
             {/* ---------- blogs Routes ---------- */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/create" element={<BlogsFormPage mode="create" />} />
          <Route path="/blogs/edit/:id" element={<BlogsFormPage mode="edit" />} />
          <Route path="/blogs/view/:id" element={<BlogsViewPage mode="view" />} />
          {/* ---------- End blogs ---------- */}












          {/* ⚙️  Add other layout pages here later */}
        </Route>

        {/* ===========================
              🔐 Auth Routes
        ============================ */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ===========================
              🚫 404 Page
        ============================ */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
