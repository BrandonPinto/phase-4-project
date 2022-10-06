import Home from "../pages/home/Home";
import Single from "../pages/single/Single";
import Settings from "../pages/settingspage/Settings";
import Write from "../pages/write/Write";
import TopBar from "./Topbar/TopBar";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

 

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home/> : <Register />}</Route>
        <Route path="/login">{user ? <Home/> : <Login />}</Route>
        <Route path="/write">{user ? <Write/> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings/> : <Register />}</Route>
        <Route path="/post/:postId">
        
         
        
          
        
          
        
          <Single/>
        </Route>
      </Switch>


    </Router>
  )
}

export default App;
