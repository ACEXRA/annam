import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";


const Content = () => {
  return (
    <>
    {/* <SignInPage/> */}
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  );
};

export default Content;
