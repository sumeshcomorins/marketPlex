import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, HashRouter, Route, Link, Routes } from "react-router-dom";
import { AuthContext } from './common/Context';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import SignIn from './screens/SignIn';

function App() {
  const [userToken, setUserToken] = useState(null)
  const [userDetail, setUserDetail] = useState(['bfjbdfbs']);
  const [ddContent, setddContent] = useState([]);
  const user = {userDetail, setUserDetail,userToken,setUserToken,ddContent, setddContent};
  return (
    <div >
    <Router>
    <AuthContext.Provider value = {user}>
      <Routes>
      {userToken ? <>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:id" element={<Home/>} />
        </>
        :
        <>
        <Route exact path="/create-a-marketplace/sign-up" element={<SignUp/>} />
        <Route path="/create-a-marketplace/sign-in" element={<SignIn/>} />
        {/* <Route exact path="sign-up/:id/:data" element={<SignUp/>} /> */}
        </>}
      </Routes>
      </AuthContext.Provider>
    </Router>
    
  </div>
  );
}

export default App;
