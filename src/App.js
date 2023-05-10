import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import InputState from "./components/InputState";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.scss";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "React", body: "Description" },
    { id: 3, title: "Vue", body: "Description" },
    { id: 4, title: "Angular", body: "Description" },
  ]);
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          placeholder="Название поста"
        />
        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title={"Список постов"} />
    </div>
  );
}

export default App;
