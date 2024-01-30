import React from "react";

export const AddPost = ({ onAddPost }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAddPost(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3 className="hpost">Add Post</h3>
      <input placeholder="✒️Title" name="title" /><br/>
      <textarea placeholder="📑Content" name="body" /><br/>
      <button type="submit" className="buttons">Add</button>
      <hr />
    </form>
  );
};