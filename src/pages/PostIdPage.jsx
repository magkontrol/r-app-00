import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    await setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    await setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, [id]);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Текущий пост</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            {" "}
            {post.id}. {post.title}{" "}
          </div>
          <div>{post.body}</div>
        </>
      )}
      {error && <div>Произошла ошибка: {error}</div>}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <h4>{comment.name}</h4>
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
              </div>
            );
          })}
        </div>
      )}
      {comError && <div>Произошла ошибка: {comError}</div>}
    </div>
  );
};

export default PostIdPage;
