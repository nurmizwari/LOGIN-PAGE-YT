import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function privateRoute() {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
