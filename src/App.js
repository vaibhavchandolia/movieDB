import React from "react";
import Navbar from "./Navbar";
// import "./App.css";
// import "antd/dist/antd.css";
// import { Projects } from "./screens/projects";
// import { Projectview } from "./screens/projectview";
// import SignIn from "./components/signin/SignIn";
// import { ProtectedRoute } from "./helper/protectedRoute";
// import SignUp from "./components/login/login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store";
import Landing from "./Landing"
import MovieDetail from "./movieDetail";
import { Login } from "./auth/Login";
import { SignUp } from "./auth/signup";

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/movieDetail" element={<MovieDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </Router>
    // </Provider>
  );
}

export default App;