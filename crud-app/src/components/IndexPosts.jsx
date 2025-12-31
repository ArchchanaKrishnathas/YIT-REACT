import React from "react";

function IndexPosts({ posts, onEdit, onDelete }) {
  return (
    <div>
      <h3>Index Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <span>{post.title}</span>
            <div>
              <button className="edit-btn" onClick={() => onEdit(post)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPosts;
