import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Orders from "../pages/Services";


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
