import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-purple-600">ℹ️ Giới thiệu</h2>
      <nav className="flex gap-6 mb-6">
        <Link className="text-blue-500 hover:underline" to="team">
          Đội ngũ
        </Link>
        <Link className="text-blue-500 hover:underline" to="company">
          Công ty
        </Link>
      </nav>

      <Routes>
        <Route path="team" element={<h3 className="text-lg">👨‍👩‍👧 Đây là đội ngũ phát triển</h3>} />
        <Route path="company" element={<h3 className="text-lg">🏢 Đây là công ty chúng tôi</h3>} />
      </Routes>
    </div>
  );
}
export default About;
