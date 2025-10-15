import { Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Permissions from "../pages/Permissions";
import Roles from "../pages/Roles";
import Users from "../pages/Users";
import UsersPage from "../pages/UsersPage";

export default function AppRoutes() {
  return (
            <Routes>

    <Route element={<AppLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/permissions" element={<Permissions />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/users" element={<Users />} />
      <Route path="/userspage" element={<UsersPage />} />
    </Route>
            </Routes>

  );
}
