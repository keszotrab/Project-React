import React, { useState } from "react";

export const Post = ({
  post,
  onSelectPost,
  onDeletePost,
  fetchComments,
  onEditPost
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedPost, setEditedPost] = useState({ ...post });

  const handleDelete = () => {
    onDeletePost(post.id);
  };

  const handleViewComments = () => {
    onSelectPost(post);
    fetchComments(post.id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEditSubmit = async (evt) => {
    evt.preventDefault();
    await onEditPost(editedPost.id, editedPost.title, editedPost.body);
    setIsEdit(false);
  };

  return (
    <div className="post">
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <div>
            <span className="post-title">
              <strong>✒️Title:</strong>
            </span> <br/>
            <input
              type="text"
              value={editedPost.title}
              onChange={(e) =>
                setEditedPost({ ...editedPost, title: e.target.value })
              }
            />
          </div>
          <div>
            <span className="post-body" >
              <strong>📑Content:</strong>
            </span><br/>
            <textarea
              value={editedPost.body}
              onChange={(e) =>
                setEditedPost({ ...editedPost, body: e.target.value })
              }
            />
          </div>
          <button className="buttons" type="submit">Save</button>
        </form>
      ) : (
        <div>
          <div>
            <span className="post-title">
              <strong>✒️Title:</strong>
              <br />
              {post.title}
            </span>
          </div>
          <div>
            <span className="post-body">
              <strong>📑Content:</strong>
              <br /> {post.body}
            </span>
          </div>
          <div className="post-buttons">
            <button className="buttons" onClick={handleViewComments}>View Comments</button>
            <button className="buttons" onClick={handleEdit}>Edit</button>
            <button className="buttons" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};