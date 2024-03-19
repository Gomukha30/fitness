import React, { useState } from "react";
// import React, {Component} from "react";
import Carousel from "./components/carousel";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import { Routes, Link, Switch, Navigate,Route} from 'react-router-dom';
import LoginPage from "./components/login";
import Homepage from "./components/Homeapage/homepage";
import Register from "./components/register";
import ForgetPassword from "./components/forgetpassword";
import Reset from "./components/reset";


function App() {
  return (
    <Routes>
      {/* <Route path="*" element={<Navigate replace to={"/"} />} /> */}
      <Route path="/home" Component={Homepage}/>
      <Route path="/login" Component={LoginPage}/>
      <Route path="/navbar" Component={Navbar}/>
      <Route path="/carousel" Component={Carousel}/>
      <Route path="/register" Component={Register} />
      <Route path="/forgetpassword" Component={ForgetPassword} />
      <Route path="/reset" Component={Reset} />
    </Routes>
  );
}

export default App;
