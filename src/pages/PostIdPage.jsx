import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    await setPost(response.data);
  });

  useEffect(() => {
    console.log(id);
    fetchPostById(id);
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
    </div>
  );
};

export default PostIdPage;
