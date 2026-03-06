import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ManagerDashboard from "./pages/ManagerDashboard.jsx";
import  AdminDashboard  from "./pages/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager"
          element={
            <ProtectedRoute role="manager">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;