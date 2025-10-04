import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  const navLinkClass =
    "px-4 py-2 rounded-lg font-medium transition duration-200 hover:bg-pink-600 hover:text-white";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 shadow-lg flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? "bg-black/20" : ""}`
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/gioi-thieu"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? "bg-black/20" : ""}`
          }
        >
          Giới thiệu
        </NavLink>
        <NavLink
          to="/lien-he"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? "bg-black/20" : ""}`
          }
        >
          Liên hệ
        </NavLink>
        <NavLink
          to="/nguoi-dung/123?q=demo"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? "bg-black/20" : ""}`
          }
        >
          Người dùng 123
        </NavLink>
      </nav>

      {/* Nội dung */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu/*" element={<About />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/nguoi-dung/:id" element={<User />} />
          <Route
            path="/old-about"
            element={<Navigate to="/gioi-thieu" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
