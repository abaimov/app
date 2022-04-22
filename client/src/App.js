import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main";
import Unauthorized from "../src/pages/Unauthorized";
import Login from "../src/components/login/login";
import Registration from "../src/components/registration/registration";
import UploadFile from "./components/upload-img/upload";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="more" element={<Unauthorized />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="upload" element={<UploadFile />} />
      </Routes>
    </div>
  );
}

export default App;
