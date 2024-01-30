import React, { useEffect, useState } from "react";



interface CommentsProps {
  postId: number;
}

interface Comments{
  id?: string;
  name?: string;
  body?: string;
}


export const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comments[] | null>([]);

  // Aktualizuje komentarze dla posta po kliknięciu view comments
  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  };
if (comments != null) {
  

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
  );}else {return (<>dzieje sie, ładuje coś...</>)}
};
