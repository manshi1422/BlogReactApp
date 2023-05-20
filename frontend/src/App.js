
import Header from "./components/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn =useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
         {!isLoggedIn ? <Route path="/auth" element={<Auth />} /> :
         <>

          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/myBlogs" element={<UserBlogs />}></Route>
          <Route path="/myBlogs/:id" element={<BlogDetail />}></Route>
          <Route path="/blogs/add" element={<AddBlog />}></Route>
          </>}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
