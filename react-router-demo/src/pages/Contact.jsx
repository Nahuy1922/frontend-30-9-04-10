import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-green-600">📞 Liên hệ</h2>
      <p className="text-gray-700 text-lg">Bạn cần hỗ trợ? Hãy liên hệ với chúng tôi!</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:opacity-90"
      >
        Về trang chủ
      </button>
    </div>
  );
}
export default Contact;
