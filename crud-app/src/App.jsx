import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import IndexPosts from "./components/IndexPosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch initial posts from API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data.slice(0, 5))) // only first 5 for demo
      .catch(err => console.error(err));
  }, []);

  // CREATE
  const handleAdd = ({ title }) => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body: "Sample body",
      userId: 1
    })
    .then(res => {
      const newPost = { id: res.data.id, title }; // API returns id
      setPosts(prev => [...prev, newPost]);
    })
    .catch(err => console.error(err));
  };

  // UPDATE
  const handleUpdate = (id, title) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body: "Updated body",
      userId: 1
    })
    .then(() => {
      setPosts(prev =>
        prev.map(post => post.id === id ? { ...post, title } : post)
      );
      setSelectedPost(null);
    })
    .catch(err => console.error(err));
  };

  // DELETE
  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(prev => prev.filter(post => post.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2>CRUD Posts Application</h2>

      <CreatePost onAdd={handleAdd} />
      <EditPost selectedPost={selectedPost} onUpdate={handleUpdate} />
      <IndexPosts posts={posts} onEdit={setSelectedPost} onDelete={handleDelete} />
    </div>
  );
}

export default App;
