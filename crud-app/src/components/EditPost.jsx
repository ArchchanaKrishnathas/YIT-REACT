import React, { useEffect, useState } from "react";

function EditPost({ selectedPost, onUpdate }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (selectedPost) setTitle(selectedPost.title);
  }, [selectedPost]);

  const handleUpdateClick = () => {
    if (!title.trim()) return;
    onUpdate(selectedPost.id, title);
    setTitle("");
  };

  if (!selectedPost) return null;

  return (
    <div>
      <h3>Edit Post</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="update-btn" onClick={handleUpdateClick}>Update</button>
    </div>
  );
}

export default EditPost;
