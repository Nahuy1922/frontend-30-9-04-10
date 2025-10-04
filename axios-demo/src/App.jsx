import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import DeletePost from "./pages/DeletePost";

function App() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Demo Axios</h1>
      <Posts />
      <CreatePost />
      <UpdatePost />
      <DeletePost />
    </div>
  );
}

export default App;
