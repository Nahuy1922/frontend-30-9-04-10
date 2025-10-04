import axiosClient from "../api/axiosClient";

function DeletePost() {
  const handleDelete = async () => {
    try {
      await axiosClient.delete("/posts/1");
      console.log("🗑️ Deleted post 1");
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2">Xóa bài viết</button>;
}

export default DeletePost;
