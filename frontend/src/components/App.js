import Home from "../pages/home/Home";
import Single from "../pages/single/Single";
import Settings from "../pages/settingspage/Settings";
import Write from "../pages/write/Write";
import TopBar from "./Topbar/TopBar";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./posts/Posts";

 

function App() {



return (
    <div>
      <TopBar />
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/write" element={<Write />} />
    <Route path="/profile" element={<Settings />} />
    <Route path="/post/:postId" />
  </Routes>
          <Single/>
    </div>
  )
}

export default App;
