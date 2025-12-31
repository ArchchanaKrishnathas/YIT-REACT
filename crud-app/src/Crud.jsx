import React, { useEffect, useState } from "react";
import axios from "axios";

function Crud() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  // READ
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setPosts(res.data.slice(0, 5)));
  }, []);

  // CREATE
  const handleAdd = () => {
    axios.post(API_URL, {
      title,
      body: "Sample body",
      userId: 1,
    }).then(res => {
      setPosts([...posts, res.data]);
      setTitle("");
    });
  };

  // UPDATE
  const handleUpdate = () => {
    axios.put(`${API_URL}/${editId}`, {
      title,
      body: "Updated body",
      userId: 1,
    }).then(() => {
      setPosts(
        posts.map(post =>
          post.id === editId ? { ...post, title } : post
        )
      );
      setEditId(null);
      setTitle("");
    });
  };

  // DELETE
  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vite React CRUD (Dummy API)</h2>

      <input
        type="text"
        value={title}
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={editId ? handleUpdate : handleAdd}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}

            <button onClick={() => {
              setTitle(post.title);
              setEditId(post.id);
            }}>
              Edit
            </button>

            <button onClick={() => handleDelete(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
