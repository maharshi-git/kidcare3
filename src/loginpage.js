import React, { useState } from "react";

import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';;



const LoginPage = () => {

    // const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  let navigate = useNavigate()

  //sdfsdf

  return (
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <form >
        <h5 className="smallMargin">Login</h5>
        <div className="form-group">
          {/* <label htmlFor="username">Username:</label> */}
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
          {/* <label htmlFor="password">Password:</label> */}
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            className="form-control smallMargin"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button  type="submit" className="btn btn-success smallMargin appButtonPurple" onClick={() => {navigate('/VaccineDet') }}>Login</button>
        <div className="smallMargin">
          <p>New user?  <button className="transparentBtn" onClick={() => {navigate('/Register') }}>Register</button></p>

        </div>
      </form>
    </div>
  );
};

export default LoginPage;