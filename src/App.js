import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import LogIn from "./Container/LogIn/login.js";
import SignIn from "./Container/SignIn/signin.js";
import Main from "./Components/Main/main.js";

function App() {
  return (

    <div className="App">
      <Route  path="/" exact component={LogIn} />
      <Route  path="/login"  component={LogIn} />
      <Route  path="/signin"  component={SignIn} />
      <Route  path="/main"  component={Main} />
    </div>
  );
}

export default App;
