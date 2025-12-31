import React, { useState } from "react";

function CreatePost({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleAddClick = () => {
    if (!title.trim()) return;
    onAdd({ title });
    setTitle("");
  };

  return (
    <div>
      <h3>Create Post</h3>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="add-btn" onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default CreatePost;
