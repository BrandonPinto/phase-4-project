import Home from "../pages/home/Home";
import Single from "../pages/single/Single";
import Settings from "../pages/settingspage/Settings";
import Write from "../pages/write/Write";
import TopBar from "./Topbar/TopBar";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Posts from "./posts/Posts";
 

function App() {

  
  const user = false;
  return (
    <div>
      <TopBar />
          <Home />
          <Header/>
          
          <Write/>
\          <Login/>
          <Register/>
          <Single/>
          <Posts/>
          <Settings/>



          {/* <Routes>
        <Route path="/" >
          <Route path="/register">{user ? <Home/> : <Register />}</Route>
          <Route path="/login">{user ? <Home/> : <Login />}</Route>
          <Route path="/write">{user ? <Write/> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings/> : <Register />}</Route>
          <Route path="/post/:postId"></Route>
          </Route>
        </Routes> */}
         
        
          
        
          
        
          


    </div>
  )
}

export default App;
