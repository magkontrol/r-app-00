import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const url = (id) => `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(url(id))
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      {post ? (
        <div>
          <p>
            <strong>Body:</strong> {post.body}
          </p>
          <p>
            <strong>ID:</strong> {post.id}
          </p>
          <p>
            <strong>Title:</strong> {post.title}
          </p>
          <p>
            <strong>UserID:</strong> {post.userId}Post
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PostIdPage;
