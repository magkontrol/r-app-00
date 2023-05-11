import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<Navigate replace to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;
