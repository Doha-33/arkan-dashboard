// @ts-ignore

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

// ✅ User Pages
// @ts-ignore
import UsersPage from "./pages/User/UsersPage";
// @ts-ignore
import UserFormPage from "./pages/User/UserForm";
// @ts-ignore
import UserViewPage from "./pages/User/UserViewPage";
// @ts-ignore
import BlogsPage from "./pages/Blogs/BlogsPage";
// @ts-ignore
import BlogsFormPage from "./pages/Blogs/BlogsFormPage";
// @ts-ignore
import BlogsViewPage from "./pages/Blogs/BlogsViewPage";
// @ts-ignore
import Home from "./pages/Dashboard/Home";
// @ts-ignore
import WalletsPage from './pages/Wallet/WalletsPage';
// @ts-ignore
import WalletsFormPage from './pages/Wallet/WalletsFormPage';
// @ts-ignore
import WalletsViewPage from './pages/Wallet/WalletsViewPage';
// @ts-ignore
import ServicesPage from './pages/Services/ServicesPage';
// @ts-ignore
import ServicesFormPage from './pages/Services/ServicesFormPage';
// @ts-ignore
import ServicesViewPage from './pages/Services/ServicesViewPage';


// @ts-ignore
import AdsPage from './pages/Ads/AdsPage';
// @ts-ignore
import AdFormPage from './pages/Ads/AdFormPage';
// @ts-ignore
import AdViewPage from './pages/Ads/AdViewPage';

// @ts-ignore
import RanksPage from './pages/Rank/RanksPage';
// @ts-ignore
import RanksFormPage from './pages/Rank/RanksFormPage';
// @ts-ignore
import RanksViewPage from './pages/Rank/RanksViewPage';


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
             {/* ---------- wallets Routes ---------- */}
          <Route path="/wallets" element={<WalletsPage />} />
          <Route path="/wallets/create" element={<WalletsFormPage mode="create" />} />
          <Route path="/wallets/edit/:id" element={<WalletsFormPage mode="edit" />} />
          <Route path="/wallets/view/:id" element={<WalletsViewPage mode="view" />} />
          {/* ---------- End wallets ---------- */}
             {/* ---------- Services Routes ---------- */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/create" element={<ServicesFormPage mode="create" />} />
          <Route path="/services/edit/:id" element={<ServicesFormPage mode="edit" />} />
          <Route path="/services/view/:id" element={<ServicesViewPage mode="view" />} />
          {/* ---------- End services ---------- */}


             {/* ---------- Ads Routes ---------- */}
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/ads/create" element={<AdFormPage mode="create" />} />
          <Route path="/ads/edit/:id" element={<AdFormPage mode="edit" />} />
          <Route path="/ads/view/:id" element={<AdViewPage mode="view" />} />
          {/* ---------- End ads ---------- */}
             {/* ---------- Ranks Routes ---------- */}
          <Route path="/ranks" element={<RanksPage />} />
          <Route path="/ranks/create" element={<RanksFormPage mode="create" />} />
          <Route path="/ranks/edit/:id" element={<RanksFormPage mode="edit" />} />
          <Route path="/ranks/view/:id" element={<RanksViewPage mode="view" />} />
          {/* ---------- End ranks ---------- */}












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
