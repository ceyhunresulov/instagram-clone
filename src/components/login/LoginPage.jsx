import React from "react";
import Login from "./Login";
import LoginImg from "./LoginImg";

function LoginPage() {
  return (
    <div className="mx-auto w-[762px] h-screen flex items-center justify-between">
      <LoginImg />
      <Login />
    </div>
  );
}

export default LoginPage;
