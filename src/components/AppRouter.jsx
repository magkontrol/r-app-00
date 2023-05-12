import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      })}

      <Route path="/" element={<Navigate replace to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;
