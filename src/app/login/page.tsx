import React from "react";
import LoginComponent from "./components/login";
import SignIn from "../_components/client/sign-in";
const LoginPage = () => {
  return (
    <>
      {/* <LoginComponent /> */}
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <SignIn />
      </div>
    </>
  );
};

export default LoginPage;
