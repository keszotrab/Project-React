import React, { useEffect, useState } from "react";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  //Aktualizuje komentarze dla posta po kliknieciu view comments
  useEffect(() => {
    fetchComments();
  }, [postId]); 

  const fetchComments = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Here are Comments for Post {postId}</h2>
      {comments.length > 0 ? (
        <ol>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ol>
      ) : (
        <p>No comments available</p>
      )}
    </div>
  );
};