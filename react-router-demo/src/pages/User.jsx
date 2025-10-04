import { useParams, useLocation, useSearchParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-pink-600">👤 Trang người dùng</h2>
      <p className="text-gray-700 text-lg">
        Mã người dùng: <span className="font-semibold">{id}</span>
      </p>
      <p className="text-gray-600">Đường dẫn hiện tại: {location.pathname}</p>
      <p className="text-gray-600">Tham số query: {searchParams.get("q")}</p>

      <button
        onClick={() => setSearchParams({ q: "react" })}
        className="mt-6 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
      >
        Đặt query ?q=react
      </button>
    </div>
  );
}
export default User;
