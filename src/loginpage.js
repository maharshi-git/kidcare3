import React, { useState, useContext } from 'react';
import { useLocation } from "react-router-dom";
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import { MyContext } from './App'


import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';;

// import GoogleLogin from "./googleSignin";

const LoginPage = () => {

  // const history = useNavigate();

  const location = useLocation();
  const data = location.state;

  const headerText = (data) ? data.headerText : "";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { isLoggingIn, setIsLoggingIn } = useContext(MyContext);



  let navigate = useNavigate()

  // const handleSuccess = (response) => {
  //   setIsLoggingIn(false);
  //   console.log('Google login success:', response);
  // };

  // const handleFailure = (response) => {
  //   setIsLoggingIn(false);
  //   console.log('Google login failure:', response);
  // };

  // const handleOnClick = () => {
  //   setIsLoggingIn(true);
  // };
  //sdfsdf

  const responseMessage = (response) => {
    // console.log(response);
    setIsLoggingIn(true);
    alert("Logged in Successfully")
    navigate("../")
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div style={{ "height": "10rem", padding: "5rem" }}>
        <h6>{headerText}</h6>
      </div>
      <div style={{ "display": 'flex', "justifyContent": 'center', "alignItems": 'center', "height": '70%' }}>

        <form >
          <h5 className="smallMargin">Login</h5>
          <div className="form-group">
            <input
              placeholder="username"
              type="text"
              id="username"
              value={username}
              className="form-control smallMargin"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              className="form-control smallMargin"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success smallMargin appButtonPurple" onClick={() => { navigate('/VaccineDet') }}>Login</button>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <div className="smallMargin">
            <p>New user?  <button className="transparentBtn" onClick={() => { navigate('/Register') }}>Register</button></p>

          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;